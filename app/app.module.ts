import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppServerComponent } from './app-server/app-server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { ReceipesListComponent } from './receipes/receipes-list/receipes-list.component';
import { ReceipeDetailComponent } from './receipes/receipe-detail/receipe-detail.component';
import { ReceipeItemComponent } from './receipes/receipes-list/receipe-item/receipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    AppServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    ShoppingListComponent,
    HeaderComponent,
    ReceipesComponent,
    ReceipesListComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    ShoppingEditComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
