import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Monitor1Page } from './monitor1.page';

describe('Monitor1Page', () => {
  let component: Monitor1Page;
  let fixture: ComponentFixture<Monitor1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Monitor1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
