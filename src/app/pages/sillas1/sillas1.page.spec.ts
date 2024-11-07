import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sillas1Page } from './sillas1.page';

describe('Sillas1Page', () => {
  let component: Sillas1Page;
  let fixture: ComponentFixture<Sillas1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Sillas1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
