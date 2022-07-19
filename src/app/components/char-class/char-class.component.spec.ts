import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharClassComponent } from './char-class.component';

describe('CharClassComponent', () => {
  let component: CharClassComponent;
  let fixture: ComponentFixture<CharClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
