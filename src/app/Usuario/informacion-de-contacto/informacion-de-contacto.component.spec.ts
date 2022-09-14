import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformacionDeContactoComponent } from './informacion-de-contacto.component';

describe('InformacionDeContactoComponent', () => {
  let component: InformacionDeContactoComponent;
  let fixture: ComponentFixture<InformacionDeContactoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionDeContactoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionDeContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
