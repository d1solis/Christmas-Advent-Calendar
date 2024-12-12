import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page13Component } from './page-13.component';

describe('Page13Component', () => {
  let component: Page13Component;
  let fixture: ComponentFixture<Page13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
