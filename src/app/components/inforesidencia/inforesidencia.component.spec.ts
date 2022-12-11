import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforesidenciaComponent } from './inforesidencia.component';

describe('InforesidenciaComponent', () => {
  let component: InforesidenciaComponent;
  let fixture: ComponentFixture<InforesidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforesidenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InforesidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
