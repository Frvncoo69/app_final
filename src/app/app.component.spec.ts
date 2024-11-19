import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let mockServiceBDService: any;
  let mockMenuController: any;
  let mockRouter: any;

  beforeEach(async () => {
    mockServiceBDService = jasmine.createSpyObj('ServiceBDService', ['consultarUsuariosPorEstadoConectado']);
    mockMenuController = jasmine.createSpyObj('MenuController', ['enable']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'events'], {
      events: of(new Event('NavigationEnd'))
    });

    mockServiceBDService.consultarUsuariosPorEstadoConectado.and.returnValue(Promise.resolve([]));

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: MenuController, useValue: mockMenuController },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
