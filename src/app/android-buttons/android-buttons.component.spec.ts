import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidButtonsComponent } from './android-buttons.component';

describe('AndroidButtonsComponent', () => {
  let component: AndroidButtonsComponent;
  let fixture: ComponentFixture<AndroidButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
