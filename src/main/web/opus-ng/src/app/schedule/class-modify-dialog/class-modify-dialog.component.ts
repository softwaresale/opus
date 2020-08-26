import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatChipListChange } from '@angular/material/chips';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Classroom } from '../../services/classroom/classroom.model';
import * as moment from 'moment';

@Component({
  selector: 'app-class-modify-dialog',
  templateUrl: './class-modify-dialog.component.html',
  styleUrls: ['./class-modify-dialog.component.sass']
})
export class ClassModifyDialogComponent implements OnInit {

  classForm: FormGroup;

  daysOfTheWeek = ['sun', 'mon', 'tue', 'wed', 'thurs', 'fri', 'sat'];

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private dialogData: { startTime?: Date },
    private matDialogRef: MatDialogRef<ClassModifyDialogComponent>,
  ) { }

  ngOnInit(): void {

    const start = moment(this.dialogData.startTime);
    const end = moment(start).add(1, 'hour');

    const startValue = this.processDate(start);
    const endValue = this.processDate(end);

    this.classForm = this.fb.group({
      name: [''],
      times: this.fb.array([
        this.fb.group({
          start: [`${startValue}`],
          end: [`${endValue}`],
          repeat: [false],
          repeatDays: this.fb.control([]),
          repeatEndDate: [null],
        })
      ]),
      description: [''],
    });
  }

  private processDate(date: moment.Moment): string {
    /*
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().slice(0, 16);
     */
    return date.format('YYYY-MM-DDTHH:mm');
  }

  get timeControls(): FormGroup[] {
    return (this.classForm.get('times') as FormArray).controls as FormGroup[];
  }

  getRepeatDayControl(group: FormGroup, day: string): FormControl {
    console.log(`Calling getRepeatDay control with day ${day}`);
    return group.get(['repeatDays', day]) as FormControl;
  }

  getStartingTimeDay(group: FormGroup): string {
    const startDateStr = group.get('start').value as string;
    const startDate = new Date(startDateStr);
    return this.daysOfTheWeek[startDate.getDay()];
  }

  onAddTime() {
    const lastTime: { start: string; end: string } = this.timeControls[this.timeControls.length - 1].value;
    const startDate = moment(lastTime.start).add(1, 'day');
    const endDate = moment(lastTime.end).add(1, 'day');

    (this.classForm.get('times') as FormArray).push(this.fb.group({
      start: [this.processDate(startDate)],
      end: [this.processDate(endDate)],
      repeat: [false],
      repeatDays: this.fb.control([]),
      repeatEndDate: [null],
    }));
  }

  onValueChange(event: MatChipListChange) {
    console.log(event)
  }

  repeatControl(key: string): FormControl {
    return (this.classForm.get('repeatDays') as FormGroup).get(key) as FormControl;
  }

  handleToggleChangeEvent(group: FormGroup, event: MatButtonToggleChange) {
    group.get('repeatDays').setValue(event.value);
  }

  private normalizeFormValue(value: any) {
    console.log(`Incoming start and end times: start - ${value.times[0].start}, end - ${value.times[0].end}`);
    console.log(`Converted to moment: start - ${moment(value.times[0].start).toISOString(true)}, end - ${moment(value.times[0].end).toISOString(true)}`)
    const classroom: Classroom = {
      name: value.name,
      description: value.description,
      times: value.times.map(time => ({
        startTime: moment(time.start).toISOString(true),
        endTime: moment(time.end).toISOString(true),
        repeat: time.repeat,
        repeatDays: time.repeatDays.join(','),
        repeatEndDate: new Date(time.repeatEndDate).toISOString(),
      })),
      assignments: [],
    };

    return classroom;
  }

  onSubmit() {
    const val = this.classForm.value;
    const newClassroom = this.normalizeFormValue(val);
    this.matDialogRef.close(newClassroom);
  }

  removeTimeBox(idx: number) {
    (this.classForm.get('times') as FormArray).removeAt(idx)
  }
}
