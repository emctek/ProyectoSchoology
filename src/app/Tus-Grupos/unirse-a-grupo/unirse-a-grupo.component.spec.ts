import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnirseAGrupoComponent } from './unirse-a-grupo.component';

describe('UnirseAGrupoComponent', () => {
  let component: UnirseAGrupoComponent;
  let fixture: ComponentFixture<UnirseAGrupoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnirseAGrupoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnirseAGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
