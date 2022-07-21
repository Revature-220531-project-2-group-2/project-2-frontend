import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SpellsComponent } from './components/spells/spells/spells.component';
import { HttpClientModule } from '@angular/common/http';
import { SpellComponent } from './components/spells/spell/spell.component';
import { MatIconModule } from '@angular/material/icon';

import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { CampaignsListComponent } from './components/campaigns-list/campaigns-list.component';
import { RaceComponent } from './components/race/race.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';

import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomepageComponent } from './components/homepage/homepage.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { CharClassComponent } from './components/char-class/char-class.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpellsComponent,
    SpellComponent,
    CreateCampaignComponent,
    CampaignsListComponent,
    RaceComponent,
    CharacterSheetComponent,
    HomepageComponent,
    AppNavComponent,
    RegisterModalComponent,
    UserDashboardComponent,
    CreateCharacterComponent,
    CharClassComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule
  ],
  providers: [AppComponent, {
    provide: MatDialogRef,
    useValue: {}
  }, UserDashboardComponent, {
      provide: MatDialogRef,
      useValue: {}
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCoffee);
  }
}
