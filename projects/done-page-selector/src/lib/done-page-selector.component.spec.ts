import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonePageSelectorComponent } from './done-page-selector.component';

describe('DonePageSelectorComponent', () => {
  let component: DonePageSelectorComponent;
  let fixture: ComponentFixture<DonePageSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonePageSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonePageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
