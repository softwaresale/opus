import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatChipListChange } from '@angular/material/chips';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Classroom } from '../../services/classroom/classroom.model';

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

    const start = this.dialogData.startTime;
    const protoEnd = new Date(start);
    const end = new Date(protoEnd.setHours(protoEnd.getHours() + 1));

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

  private processDate(date: Date): string {
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().slice(0, 16);
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
    const startDate = new Date(lastTime.start);
    const endDate = new Date(lastTime.end);

    startDate.setDate(startDate.getDate() + 1);
    endDate.setDate(endDate.getDate() + 1);

    (this.classForm.get('times') as FormArray).push(this.fb.group({
      start: [this.processDate(startDate)],
      end: [this.processDate(endDate)],
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
    const classroom: Classroom = {
      name: value.name,
      description: value.description,
      times: value.times.map(time => ({
        startTime: new Date(time.start).toISOString(),
        endTime: new Date(time.end).toISOString(),
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
}
