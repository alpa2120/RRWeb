import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEntranceComponent } from './main-entrance.component';

describe('MainEntranceComponent', () => {
  let component: MainEntranceComponent;
  let fixture: ComponentFixture<MainEntranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainEntranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEntranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
