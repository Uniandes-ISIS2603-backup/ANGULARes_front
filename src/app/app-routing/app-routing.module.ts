import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { BookListComponent } from '../book/book-list/book-list.component';
import { EditorialListComponent } from '../editorial/editorial-list/editorial-list.component';
import { EditorialDetailComponent } from '../editorial/editorial-detail/editorial-detail.component';
import { AuthorDetailComponent } from '../author/author-detail/author-detail.component';
import { AuthorListComponent } from '../author/author-list/author-list.component';
import { BookDetailComponent } from '../book/book-detail/book-detail.component';
import {CartDetailComponent} from '../carroCompras/carroCompras-detail/carroCompras-detail.component';
import {CartCheckoutComponent} from '../carroCompras/carroCompras-checkout/carroCompras-checkout.component';
import { HomeComponent } from '../home/home.component';
import { ClientDetailComponent } from '../client/client-detail/client-detail.component';

const routes: Routes = [

    {
        path: 'books',
        children: [
            {
                path: 'list',
                component: BookListComponent
            },
            {
                path: ':id',
                component: BookDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'clients',
        children: [
            {
            path: ':id',
            component: ClientDetailComponent
            }
        ]
    },
    {
        path: 'authors',
        children: [
            {
                path: 'list',
                component: AuthorListComponent
            },
            {
                path: ':id',
                component: AuthorDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'editorials',
        children: [
            {
                path: 'list',
                component: EditorialListComponent
            },
            {
                path: ':id',
                component: EditorialDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path:'cart',
        component:CartDetailComponent
    },
    {
        path:'checkout',
        component:CartCheckoutComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
