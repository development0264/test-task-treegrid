import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeGridModule} from '@syncfusion/ej2-angular-treegrid';
import { 
  PageService, 
  SortService, 
  FilterService,
  ReorderService,
  ToolbarService,
  RowDDService,
  EditService,
  ColumnMenuService,
  ContextMenuService } from '@syncfusion/ej2-angular-treegrid';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { ColorPickerModule,TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

import { ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
enableRipple(true);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeGridModule,
    ContextMenuModule,
    FormsModule,
    DialogModule,
    ColorPickerModule,
    TextBoxModule,
    ButtonModule, 
    CheckBoxModule, 
    RadioButtonModule, 
    SwitchModule
  ],
  providers: [
    PageService, 
    SortService, 
    FilterService,
    ReorderService,
    RowDDService,
    ToolbarService,
    EditService,
    ColumnMenuService,
    ContextMenuService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
