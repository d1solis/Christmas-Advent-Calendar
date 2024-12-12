import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page24Component } from './page-24.component';

describe('Page24Component', () => {
  let component: Page24Component;
  let fixture: ComponentFixture<Page24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
