import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfofamiliarComponent } from './infofamiliar.component';

describe('InfofamiliarComponent', () => {
  let component: InfofamiliarComponent;
  let fixture: ComponentFixture<InfofamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfofamiliarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfofamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
