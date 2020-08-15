import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentModifyDialogComponent } from './assignment-modify-dialog.component';

describe('AssignmentModifyDialogComponent', () => {
  let component: AssignmentModifyDialogComponent;
  let fixture: ComponentFixture<AssignmentModifyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentModifyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentModifyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
