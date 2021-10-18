import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamicCivilComponent } from './islamic-civil.component';

describe('IslamicCivilComponent', () => {
  let component: IslamicCivilComponent;
  let fixture: ComponentFixture<IslamicCivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslamicCivilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslamicCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
