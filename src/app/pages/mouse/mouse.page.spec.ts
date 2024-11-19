import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { MousePage } from './mouse.page';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

describe('MousePage', () => {
  let component: MousePage;
  let fixture: ComponentFixture<MousePage>;

  const mockServiceBDService = {
    seleccionarMouse: jasmine.createSpy('seleccionarMouse').and.returnValue(Promise.resolve([
      { id: 1, nombre: 'Mouse 1', precio: 100 },
      { id: 2, nombre: 'Mouse 2', precio: 200 }
    ]))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MousePage],
      providers: [
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: Router, useValue: {} }, // Mock Router si lo necesitas
        { provide: AlertController, useValue: {} } // Mock AlertController si lo necesitas
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});