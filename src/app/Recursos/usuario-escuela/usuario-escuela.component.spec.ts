import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuarioEscuelaComponent } from './usuario-escuela.component';

describe('UsuarioEscuelaComponent', () => {
  let component: UsuarioEscuelaComponent;
  let fixture: ComponentFixture<UsuarioEscuelaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioEscuelaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
