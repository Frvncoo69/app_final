import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecladosPage } from './teclados.page';

describe('TecladosPage', () => {
  let component: TecladosPage;
  let fixture: ComponentFixture<TecladosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TecladosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
