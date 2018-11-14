import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportNavbarComponent } from './sport-navbar.component';

describe('SportNavbarComponent', () => {
  let component: SportNavbarComponent;
  let fixture: ComponentFixture<SportNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
