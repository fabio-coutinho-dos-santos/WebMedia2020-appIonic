import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EletricidadePage } from './eletricidade.page';

describe('EletricidadePage', () => {
  let component: EletricidadePage;
  let fixture: ComponentFixture<EletricidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EletricidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EletricidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
