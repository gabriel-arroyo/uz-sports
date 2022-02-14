import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisisuzComponent } from './thisisuz.component';

describe('ThisisuzComponent', () => {
  let component: ThisisuzComponent;
  let fixture: ComponentFixture<ThisisuzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThisisuzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisisuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
