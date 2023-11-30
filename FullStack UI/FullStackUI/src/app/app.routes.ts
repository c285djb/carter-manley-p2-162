import { Routes } from '@angular/router';
import { CreateMemberComponent } from './components/members/create-member/create-member.component';
import { ViewMembersComponent } from './components/members/view-members/view-members.component';
//import { MembersListComponent } from './components/members/members-list/members-list.component';
//import { AddMemberComponent } from './components/members/add-member/add-member.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     component: MembersListComponent
    // },
    // {
    //     path: 'members',
    //     component: MembersListComponent
    // },
    // {
    //     path: 'members/add',
    //     component: AddMemberComponent
    // }

    {
        path: 'members/create',
        component: CreateMemberComponent
    },

    {
        path: 'members',
        component: ViewMembersComponent
    }
];
