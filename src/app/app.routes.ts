import { Routes, RouterModule } from '@angular/router';
import {ContactListComponent} from "./contact-list/contact-list.component";

export const routes: Routes = [
  { path: '',                   component: ContactListComponent},
  { path: 'contact',              component: ContactListComponent }
];

export const routing = RouterModule.forRoot(routes);
