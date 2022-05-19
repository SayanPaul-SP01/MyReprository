import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/services/login.service';
import { AuthGuard } from 'src/services/auth.guard';
import { AuthInterceptor } from 'src/services/auth.interceptor';
import {MatIconModule} from '@angular/material/icon'
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { HomeComponent } from './components/home/home.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { LoginComponent } from './components/login/login.component';
import { PensionerInputComponent } from './components/pensioner-input/pensioner-input.component';
import { PensionerListComponent } from './components/pensioner-list/pensioner-list.component';
import { PensionDisburseComponent } from './components/pension-disburse/pension-disburse.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    PensionerInputComponent,
    PensionerListComponent,
    PensionDisburseComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    NgbModule,
    MatIconModule,
    MatTabsModule,
    ReactiveFormsModule

    
  ],
  providers: [LoginService,AuthGuard,[{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
