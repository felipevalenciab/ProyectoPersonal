import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfolaboralComponent } from './infolaboral.component';

describe('InfolaboralComponent', () => {
  let component: InfolaboralComponent;
  let fixture: ComponentFixture<InfolaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfolaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfolaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
