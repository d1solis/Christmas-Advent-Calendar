import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page17Component } from './page-17.component';

describe('Page17Component', () => {
  let component: Page17Component;
  let fixture: ComponentFixture<Page17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
