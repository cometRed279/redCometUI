import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/shared/auth/auth.guard';

const routes: Routes = [
  {path: 'loginuser', 
  loadChildren: () => import('./features/login/login.module').then(mod => mod.LoginModule),
  canLoad: [AuthGuard]
  },
  {path: 'dashboard',
  loadChildren: () => import('./features/admin/admin.module').then(mod => mod.AdminModule),
  canLoad: [AuthGuard]
  },
  {path: 'users',
  loadChildren: () => import('./features/users/users.module').then(mod => mod.UsersModule),
  canLoad: [AuthGuard]
  },
  {path: 'courses',
  loadChildren: () => import('./features/courses/courses.module').then(mod => mod.CoursesModule),
  canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
