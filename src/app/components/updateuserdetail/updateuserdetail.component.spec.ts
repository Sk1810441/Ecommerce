import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserdetailComponent } from './updateuserdetail.component';

describe('UpdateuserdetailComponent', () => {
  let component: UpdateuserdetailComponent;
  let fixture: ComponentFixture<UpdateuserdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateuserdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
