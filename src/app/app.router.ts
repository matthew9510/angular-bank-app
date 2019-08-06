import { ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'; 
import { AtmComponent } from './atm/atm.component';
import { TellerComponent } from './teller/teller.component';
import { ContactComponent } from './contact/contact.component'

export const routes: Routes = [
  { path: '', redirectTo: 'atm', pathMatch: 'full' },
  { path: 'atm', component: AtmComponent },
  { path: 'teller', component: TellerComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: AtmComponent } // This must be at the end, otherwise the routes will not work 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class router{}
// export const router: ModuleWithProviders = RouterModule.forRoot(routes);
