import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetTabsComponent } from './character-sheet-tabs.component';

describe('CharacterSheetTabsComponent', () => {
  let component: CharacterSheetTabsComponent;
  let fixture: ComponentFixture<CharacterSheetTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterSheetTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
