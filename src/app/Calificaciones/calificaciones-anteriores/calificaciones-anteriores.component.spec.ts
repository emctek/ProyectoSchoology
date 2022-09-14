import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalificacionesAnterioresComponent } from './calificaciones-anteriores.component';

describe('CalificacionesAnterioresComponent', () => {
  let component: CalificacionesAnterioresComponent;
  let fixture: ComponentFixture<CalificacionesAnterioresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionesAnterioresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalificacionesAnterioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
