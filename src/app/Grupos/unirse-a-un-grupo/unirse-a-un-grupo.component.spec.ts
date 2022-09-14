import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnirseAUnGrupoComponent } from './unirse-a-un-grupo.component';

describe('UnirseAUnGrupoComponent', () => {
  let component: UnirseAUnGrupoComponent;
  let fixture: ComponentFixture<UnirseAUnGrupoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnirseAUnGrupoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnirseAUnGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
