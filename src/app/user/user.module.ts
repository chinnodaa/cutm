import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent }  // Default route for users
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),CommonModule],
    
  exports: [RouterModule]
})
export class UserModule { }
