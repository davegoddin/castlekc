import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TrainingComponent } from './training/training.component';
import { ContactComponent } from './contact/contact.component';
import { MembershipComponent } from './membership/membership.component';

const routes: Routes = [
  {path: 'training', component: TrainingComponent},
  {path: '', component: AboutComponent},
  {path: 'membership', component: MembershipComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
