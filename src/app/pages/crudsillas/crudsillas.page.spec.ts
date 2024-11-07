import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudsillasPage } from './crudsillas.page';

describe('CrudsillasPage', () => {
  let component: CrudsillasPage;
  let fixture: ComponentFixture<CrudsillasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudsillasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
