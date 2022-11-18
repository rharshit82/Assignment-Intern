import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemTestsComponent } from './system-tests.component';

describe('SystemTestsComponent', () => {
  let component: SystemTestsComponent;
  let fixture: ComponentFixture<SystemTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
