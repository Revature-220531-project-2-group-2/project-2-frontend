import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SpellsComponent } from './components/spells/spells.component';
import { HttpClientModule } from '@angular/common/http';
import { SpellComponent } from './components/spell/spell.component';
import { MatTabsModule } from '@angular/material/tabs';

import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { CampaignsListComponent } from './components/campaigns-list/campaigns-list.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterSheetTabsComponent } from './components/character-sheet-tabs/character-sheet-tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SpellsComponent,
    SpellComponent,
    CreateCampaignComponent,
    CampaignsListComponent,
    CharacterSheetComponent,
    CharacterSheetTabsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
