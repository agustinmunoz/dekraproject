import { AppModule } from './../../app.module';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/usuarios/login.service';

import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [LoginComponent],
  providers: [LoginService,HttpClient],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ]

})
export class LoginModule { }
