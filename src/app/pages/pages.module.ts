import { NgModule } from '@angular/core';
import { NbMenuModule, NbAccordionModule, NbTreeGridModule} from '@nebular/theme';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CreateTenderComponent } from './create-tender/create-tender.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NbAuthModule } from '@nebular/auth';
import { MatCardModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatInputModule,  } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { DemoMaterialModule } from './create-tender/material-module';
import { MyTendersComponent } from './my-tenders/my-tenders.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TableRowComponent } from './nested-table/table-row/table-row.component';
import {RelativeTableComponent} from './nested-table/relative-table/relative-table.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { ExploreTendersComponent } from './explore-tenders/explore-tenders.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CustomDatePipe } from './pipes/date.pipe';
import { ResgisterFormComponent } from './registerform/register-form.component';
import { ActiveGuard } from './gaurds/active.gaurad';
import { CartComponent } from './cart/cart.component';
import { PlanPricingTable } from './pricing-table/plan-pricing-table.component';
import { VerifyEmail } from './verify-email/verify-email.component';
import { Redirection } from './redirection/redirection.component';
import { SellerDashboard } from './seller-dashboard/seller-dashboard.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { PlaceOrderComponent } from './payment/place-order/place-order.component';
import { FineTradeComponent } from './finetrade/finetrade-dashboard/finetrade-dashboard.component';
import { AddProductComponent } from './add-product/addProduct.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ChartsModule,
    NbAuthModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    FormsModule,
    DemoMaterialModule,
    NbAccordionModule,
    Ng2SmartTableModule,
    NbTreeGridModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    AngularMultiSelectModule,
    NgxPaginationModule
   
  ],
  declarations: [
    PagesComponent,
    CreateTenderComponent,
    MyTendersComponent,
    TableRowComponent,
    RelativeTableComponent,
    FileSelectDirective,
    ExploreTendersComponent,
    CustomDatePipe,
    ResgisterFormComponent,
    CartComponent,
    PlanPricingTable,
    VerifyEmail,
    Redirection,
    SellerDashboard,
    CertificatesComponent,
    PlaceOrderComponent,
    FineTradeComponent,
    AddProductComponent
  ],
  providers:[ActiveGuard]
})
export class PagesModule {
}
