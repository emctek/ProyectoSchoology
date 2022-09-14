import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecursosDelGrupoComponent } from './recursos-del-grupo.component';

describe('RecursosDelGrupoComponent', () => {
  let component: RecursosDelGrupoComponent;
  let fixture: ComponentFixture<RecursosDelGrupoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursosDelGrupoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecursosDelGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
