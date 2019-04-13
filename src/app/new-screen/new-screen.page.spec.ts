import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewScreenPage } from './new-screen.page';

describe('NewScreenPage', () => {
  let component: NewScreenPage;
  let fixture: ComponentFixture<NewScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
