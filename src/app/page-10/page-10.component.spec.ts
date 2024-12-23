import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page10Component } from './page-10.component';

describe('Page10Component', () => {
  let component: Page10Component;
  let fixture: ComponentFixture<Page10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
