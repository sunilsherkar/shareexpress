import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EffectPage } from './effect.page';

describe('EffectPage', () => {
  let component: EffectPage;
  let fixture: ComponentFixture<EffectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EffectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
