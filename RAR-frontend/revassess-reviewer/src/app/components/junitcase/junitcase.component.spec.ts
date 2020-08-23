import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JunitcaseComponent } from './junitcase.component';

describe('JunitcaseComponent', () => {
  let component: JunitcaseComponent;
  let fixture: ComponentFixture<JunitcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunitcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunitcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
