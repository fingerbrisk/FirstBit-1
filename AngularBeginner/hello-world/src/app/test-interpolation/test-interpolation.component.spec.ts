import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInterpolationComponent } from './test-interpolation.component';

describe('TestInterpolationComponent', () => {
  let component: TestInterpolationComponent;
  let fixture: ComponentFixture<TestInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestInterpolationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
