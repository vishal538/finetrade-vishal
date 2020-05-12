import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { CreateTenderComponent } from './create-tender/create-tender.component';
import { MyTendersComponent } from './my-tenders/my-tenders.component';
import { ExploreTendersComponent } from './explore-tenders/explore-tenders.component';
import { ResgisterFormComponent } from './registerform/register-form.component';
import { ActiveGuard } from './gaurds/active.gaurad';
import { CartComponent } from './cart/cart.component';
import { PlanPricingTable } from './pricing-table/plan-pricing-table.component';
import { VerifyEmail } from './verify-email/verify-email.component';
import { Redirection } from './redirection/redirection.component';
import { AddProductComponent } from './add-product/addProduct.component';
import { SellerDashboard } from './seller-dashboard/seller-dashboard.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { PlaceOrderComponent } from './payment/place-order/place-order.component';
import { FineTradeComponent } from './finetrade/finetrade-dashboard/finetrade-dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'register-form',
      component: ResgisterFormComponent,
    },
    {
      path: 'add-product',
      component: AddProductComponent,
    },
    {
      path: 'dashboard',
      component: ECommerceComponent, canActivate:[ActiveGuard]
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'explore-tenders',
      component: ExploreTendersComponent,canActivate: [ActiveGuard] 
    },
    {
      path: 'my-tenders',
      component: MyTendersComponent,
    },
    {
      path: 'certificates',
      component: CertificatesComponent,
    },
    {
      path: 'place-order',
      component: PlaceOrderComponent,
    },
    {
      path: 'finetrade', children: [
        {path: 'dashboard', component: FineTradeComponent}
      ]
    },
    {
      path: 'seller-dashboard',
      component: SellerDashboard,
    },
    {
      path: 'verify-email',
      component: VerifyEmail,
    },
    {
      path: 'redirection',
      component: Redirection,
    },
    {
      path: 'cart',
      component: CartComponent,
    },
    {
      path: 'plan-pricing-table',
      component: PlanPricingTable,
    },
    {
      path: 'create-tender',
      component: CreateTenderComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'register-form',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
