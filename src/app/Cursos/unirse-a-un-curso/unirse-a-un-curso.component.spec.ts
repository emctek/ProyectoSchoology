import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnirseAUnCursoComponent } from './unirse-a-un-curso.component';

describe('UnirseAUnCursoComponent', () => {
  let component: UnirseAUnCursoComponent;
  let fixture: ComponentFixture<UnirseAUnCursoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnirseAUnCursoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnirseAUnCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
