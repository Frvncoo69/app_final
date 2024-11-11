import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitoresPage } from './monitores.page';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

class SQLiteMock {
  // Define métodos mock si `ServiceBDService` los necesita
}

describe('MonitoresPage', () => {
  let component: MonitoresPage;
  let fixture: ComponentFixture<MonitoresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoresPage],
      providers: [
        { provide: ServiceBDService, useClass: ServiceBDService },
        { provide: SQLite, useClass: SQLiteMock },
        AlertController,
        Router
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
