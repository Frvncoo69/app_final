import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mouse1Page } from './mouse1.page';

describe('Mouse1Page', () => {
  let component: Mouse1Page;
  let fixture: ComponentFixture<Mouse1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Mouse1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
