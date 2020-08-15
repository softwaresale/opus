import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassModifyDialogComponent } from './class-modify-dialog.component';

describe('ClassModifyDialogComponent', () => {
  let component: ClassModifyDialogComponent;
  let fixture: ComponentFixture<ClassModifyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassModifyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassModifyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
