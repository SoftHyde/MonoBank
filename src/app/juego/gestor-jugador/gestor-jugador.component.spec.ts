import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorJugadorComponent } from './gestor-jugador.component';

describe('GestorJugadorComponent', () => {
  let component: GestorJugadorComponent;
  let fixture: ComponentFixture<GestorJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorJugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
