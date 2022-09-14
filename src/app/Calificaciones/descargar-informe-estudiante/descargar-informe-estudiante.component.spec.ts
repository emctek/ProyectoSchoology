import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescargarInformeEstudianteComponent } from './descargar-informe-estudiante.component';

describe('DescargarInformeEstudianteComponent', () => {
  let component: DescargarInformeEstudianteComponent;
  let fixture: ComponentFixture<DescargarInformeEstudianteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DescargarInformeEstudianteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescargarInformeEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
