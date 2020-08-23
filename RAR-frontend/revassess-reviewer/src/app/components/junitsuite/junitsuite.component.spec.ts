import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JunitsuiteComponent } from './junitsuite.component';

describe('JunitsuiteComponent', () => {
  let component: JunitsuiteComponent;
  let fixture: ComponentFixture<JunitsuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunitsuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunitsuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
