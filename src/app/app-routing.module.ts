import { SpellComponent } from './components/spells/spell/spell.component';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CampaignsListComponent } from './components/campaigns-list/campaigns-list.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

import { SpellsComponent } from './components/spells/spells/spells.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';

const routes: Routes = [
  { path: 'register', component: RegisterModalComponent },
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'spells', component: SpellsComponent },
  { path: 'new-character', component: CreateCharacterComponent },
  { path: 'new-campaign', component: CreateCampaignComponent },  // will take this path out
  { path: 'campaigns', component: CampaignsListComponent },  // will take this path out
  { path: 'character-sheet', component: CharacterSheetComponent },
  { path: 'spell', component: SpellComponent},
  { path: 'login/profile', component: UserDashboardComponent },
  { path: 'login/profile/new-character/:username', component: CreateCharacterComponent },
  { path: 'login/profile/chars/:id', component: CharacterSheetComponent }


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
