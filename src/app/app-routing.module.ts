import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CampaignsListComponent } from './components/campaigns-list/campaigns-list.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-campaign', component: CreateCampaignComponent },  // will take this path out
  { path: 'campaigns', component: CampaignsListComponent },  // will take this path out
  { path: 'character-sheet', component: CharacterSheetComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
