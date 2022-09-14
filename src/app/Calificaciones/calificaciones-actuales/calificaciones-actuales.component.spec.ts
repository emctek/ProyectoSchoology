import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalificacionesActualesComponent } from './calificaciones-actuales.component';

describe('CalificacionesActualesComponent', () => {
  let component: CalificacionesActualesComponent;
  let fixture: ComponentFixture<CalificacionesActualesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionesActualesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalificacionesActualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
