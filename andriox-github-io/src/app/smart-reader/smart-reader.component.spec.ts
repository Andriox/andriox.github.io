import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartReaderComponent } from './smart-reader.component';

describe('SmartReaderComponent', () => {
  let component: SmartReaderComponent;
  let fixture: ComponentFixture<SmartReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
