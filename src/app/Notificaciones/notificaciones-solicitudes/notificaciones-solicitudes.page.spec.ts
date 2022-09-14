import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificacionesSolicitudesPage } from './notificaciones-solicitudes.page';

describe('NotificacionesSolicitudesPage', () => {
  let component: NotificacionesSolicitudesPage;
  let fixture: ComponentFixture<NotificacionesSolicitudesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionesSolicitudesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificacionesSolicitudesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
