import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisAplicacionesDeRecursosComponent } from './mis-aplicaciones-de-recursos.component';

describe('MisAplicacionesDeRecursosComponent', () => {
  let component: MisAplicacionesDeRecursosComponent;
  let fixture: ComponentFixture<MisAplicacionesDeRecursosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MisAplicacionesDeRecursosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisAplicacionesDeRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
