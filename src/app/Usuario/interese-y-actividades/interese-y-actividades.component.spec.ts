import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntereseYActividadesComponent } from './interese-y-actividades.component';

describe('IntereseYActividadesComponent', () => {
  let component: IntereseYActividadesComponent;
  let fixture: ComponentFixture<IntereseYActividadesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntereseYActividadesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntereseYActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
