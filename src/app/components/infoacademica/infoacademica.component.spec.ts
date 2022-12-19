import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoacademicaComponent } from './infoacademica.component';

describe('InfoacademicaComponent', () => {
  let component: InfoacademicaComponent;
  let fixture: ComponentFixture<InfoacademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoacademicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoacademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
