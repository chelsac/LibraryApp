import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookheaderComponent } from './bookheader.component';

describe('BookheaderComponent', () => {
  let component: BookheaderComponent;
  let fixture: ComponentFixture<BookheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
