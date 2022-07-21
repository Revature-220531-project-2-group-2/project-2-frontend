import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignRoomComponent } from './campaign-room.component';

describe('CampaignRoomComponent', () => {
  let component: CampaignRoomComponent;
  let fixture: ComponentFixture<CampaignRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

