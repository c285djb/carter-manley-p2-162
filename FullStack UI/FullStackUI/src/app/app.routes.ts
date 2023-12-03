import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMemberComponent } from './components/members/create-member/create-member.component';
import { ViewMembersComponent } from './components/members/view-members/view-members.component';
import { AppComponent } from './app.component';
//import { MembersListComponent } from './components/members/members-list/members-list.component';
//import { AddMemberComponent } from './components/members/add-member/add-member.component';

// export const routes: Routes = [

//     {
//         path: 'members/create',
//         component: CreateMemberComponent
//     },

//     {
//         path: 'members',
//         component: ViewMembersComponent
//     }
// ];



export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'view', component: ViewMembersComponent},
    {path: 'create', component: CreateMemberComponent},
    {path: '**', component: AppComponent, pathMatch: 'full'}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }