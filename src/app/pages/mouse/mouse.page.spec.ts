import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MousePage } from './mouse.page';

describe('MousePage', () => {
  let component: MousePage;
  let fixture: ComponentFixture<MousePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
