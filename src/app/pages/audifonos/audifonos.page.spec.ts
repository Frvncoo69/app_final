import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudifonosPage } from './audifonos.page';

describe('AudifonosPage', () => {
  let component: AudifonosPage;
  let fixture: ComponentFixture<AudifonosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AudifonosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
