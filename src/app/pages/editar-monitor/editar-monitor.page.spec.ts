import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarMonitorPage } from './editar-monitor.page';

describe('EditarMonitorPage', () => {
  let component: EditarMonitorPage;
  let fixture: ComponentFixture<EditarMonitorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMonitorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
