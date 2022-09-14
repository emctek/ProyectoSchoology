import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GruposDeLaEscuelaComponent } from './grupos-de-la-escuela.component';

describe('GruposDeLaEscuelaComponent', () => {
  let component: GruposDeLaEscuelaComponent;
  let fixture: ComponentFixture<GruposDeLaEscuelaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposDeLaEscuelaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GruposDeLaEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
