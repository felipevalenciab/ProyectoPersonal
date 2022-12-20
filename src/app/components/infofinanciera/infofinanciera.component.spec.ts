import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfofinancieraComponent } from './infofinanciera.component';

describe('InfofinancieraComponent', () => {
  let component: InfofinancieraComponent;
  let fixture: ComponentFixture<InfofinancieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfofinancieraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfofinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
