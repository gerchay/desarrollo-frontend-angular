import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { PhotosComponent } from './components/photos/photos.component';

const routes: Routes = [
  {path: '', redirectTo: '/usuarios', pathMatch:'full'},
  {path: 'usuarios', component: UsersComponent},
  {path: 'fotos', component: PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
