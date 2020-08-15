import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-class-modify-dialog',
  templateUrl: './class-modify-dialog.component.html',
  styleUrls: ['./class-modify-dialog.component.sass']
})
export class ClassModifyDialogComponent implements OnInit {

  classForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private dialogData: { startTime?: Date }
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
}
