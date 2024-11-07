import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pc1Page } from './pc1.page';

describe('Pc1Page', () => {
  let component: Pc1Page;
  let fixture: ComponentFixture<Pc1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pc1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
