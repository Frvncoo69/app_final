import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Teclado1Page } from './teclado1.page';

describe('Teclado1Page', () => {
  let component: Teclado1Page;
  let fixture: ComponentFixture<Teclado1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Teclado1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
