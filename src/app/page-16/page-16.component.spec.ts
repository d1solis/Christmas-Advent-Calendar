import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page16Component } from './page-16.component';

describe('Page16Component', () => {
  let component: Page16Component;
  let fixture: ComponentFixture<Page16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
