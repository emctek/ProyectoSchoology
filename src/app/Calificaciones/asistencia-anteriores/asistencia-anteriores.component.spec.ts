import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsistenciaAnterioresComponent } from './asistencia-anteriores.component';

describe('AsistenciaAnterioresComponent', () => {
  let component: AsistenciaAnterioresComponent;
  let fixture: ComponentFixture<AsistenciaAnterioresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistenciaAnterioresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsistenciaAnterioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
