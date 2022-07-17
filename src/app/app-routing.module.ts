import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CampaignsListComponent } from './components/campaigns-list/campaigns-list.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: 'register', component: RegisterModalComponent },
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-campaign', component: CreateCampaignComponent },  // will take this path out
  { path: 'campaigns', component: CampaignsListComponent },  // will take this path out
  { path: 'character-sheet', component: CharacterSheetComponent },
  { path: 'login/profile', component: UserDashboardComponent },
  { path: 'login/profile/chars/:id', component: CharacterSheetComponent }


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
