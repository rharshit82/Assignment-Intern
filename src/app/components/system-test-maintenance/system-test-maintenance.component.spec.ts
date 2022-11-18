import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemTestMaintenanceComponent } from './system-test-maintenance.component';

describe('SystemTestMaintenanceComponent', () => {
  let component: SystemTestMaintenanceComponent;
  let fixture: ComponentFixture<SystemTestMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemTestMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemTestMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
