import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SillasPage } from './sillas.page';

describe('SillasPage', () => {
  let component: SillasPage;
  let fixture: ComponentFixture<SillasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SillasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
