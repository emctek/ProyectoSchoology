import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalificacionesAsistenciaPage } from './calificaciones-asistencia.page';

describe('CalificacionesAsistenciaPage', () => {
  let component: CalificacionesAsistenciaPage;
  let fixture: ComponentFixture<CalificacionesAsistenciaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionesAsistenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalificacionesAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
