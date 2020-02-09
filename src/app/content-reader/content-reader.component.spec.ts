import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentReaderComponent } from './content-reader.component';

describe('ContentReaderComponent', () => {
  let component: ContentReaderComponent;
  let fixture: ComponentFixture<ContentReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
