import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeTarjetaComponent } from './heroetarjeta.component';

describe('HeroetarjetaComponent', () => {
  let component: HeroeTarjetaComponent;
  let fixture: ComponentFixture<HeroeTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
