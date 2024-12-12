import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page9Component } from './page-9.component';

describe('Page9Component', () => {
  let component: Page9Component;
  let fixture: ComponentFixture<Page9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
