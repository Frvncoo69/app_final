import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudmousePage } from './crudmouse.page';

describe('CrudmousePage', () => {
  let component: CrudmousePage;
  let fixture: ComponentFixture<CrudmousePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudmousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
