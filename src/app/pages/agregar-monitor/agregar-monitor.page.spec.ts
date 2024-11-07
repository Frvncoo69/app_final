import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarMonitorPage } from './agregar-monitor.page';

describe('AgregarMonitorPage', () => {
  let component: AgregarMonitorPage;
  let fixture: ComponentFixture<AgregarMonitorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMonitorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
