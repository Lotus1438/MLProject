import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFeedbackPageComponent } from './request-feedback-page.component';

describe('RequestFeedbackPageComponent', () => {
  let component: RequestFeedbackPageComponent;
  let fixture: ComponentFixture<RequestFeedbackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestFeedbackPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestFeedbackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
