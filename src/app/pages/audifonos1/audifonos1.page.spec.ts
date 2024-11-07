import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Audifonos1Page } from './audifonos1.page';

describe('Audifonos1Page', () => {
  let component: Audifonos1Page;
  let fixture: ComponentFixture<Audifonos1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Audifonos1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
