import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDetailsViewComponent } from './class-details-view.component';

describe('ClassDetailsViewComponent', () => {
  let component: ClassDetailsViewComponent;
  let fixture: ComponentFixture<ClassDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
