import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitoresPage } from './monitores.page';

describe('MonitoresPage', () => {
  let component: MonitoresPage;
  let fixture: ComponentFixture<MonitoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
