import { Component, ElementRef, ViewChild } from '@angular/core';
import { TreeGrid, Resize, ExcelExport, PdfExport, Edit, Page, ContextMenu, Sort, SortSettingsModel, PageSettingsModel, Freeze, Reorder, EditSettings, ContextMenuItem } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

import { addClass, getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
// TreeGrid.Inject(Resize, ExcelExport, PdfExport, Edit, Page, ContextMenu, Sort, Freeze, Reorder);
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
import { ColorPickerEventArgs, ColorPickerComponent } from '@syncfusion/ej2-angular-inputs';
import { QueryCellInfoEventArgs, TextWrapSettingsModel } from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: Object[];
  public sortSettings: SortSettingsModel;
  public pageSettings: PageSettingsModel;
  public editSettings: EditSettingsModel;
  public toolbarOptions: ToolbarItems[];
  public rowDrop: Object;
  public selectionSettings: Object;
  public filterSettings: Object;
  public contextMenuItems: Object[];
  @ViewChild('TreeGrid')
  public treeGridObj: TreeGridComponent;
  public argmo: any;
  public args: any;
  public customAttributes: Object;
  choosedColor: any;
  show = true;
  @ViewChild('colorpicker')
  private colorPicker: ColorPickerComponent;
  @ViewChild('template') template: DialogComponent;
  // Create element reference for dialog target element.
  @ViewChild('container', { read: ElementRef }) container: ElementRef;
  // The Dialog shows within the target element.
  public targetElement: HTMLElement;
  public proxy: any = this;
  displaydatatype = 'none';
  displaydefault = 'none';
  displayfont = 'none';
  displaycolor = 'none';
  displayalign = 'none';
  displaytextwrap = 'none';
  choosedAlign: any;
  public wrapSettings: TextWrapSettingsModel; 
  size = '';
  choosedDatatype: string;
  choosedDefaultValue: string;

  constructor() {
    this.data = sampleData;
     
    this.sortSettings = { columns: [{ field: 'taskName', direction: 'Ascending' }, { field: 'taskID', direction: 'Descending' }] };
    this.pageSettings = { pageSize: 10 };
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.selectionSettings = { type: 'Multiple' };
    this.rowDrop = { targetID: 'TreeGrid' };
    this.filterSettings = { type: 'Menu' };
    this.contextMenuItems = [
      { text: 'Data Type', target: '.e-gridheader', id: 'datatype' },
      { text: 'Default Value', target: '.e-gridheader', id: 'defaultvalue' },
      { text: 'Font', target: '.e-gridheader', id: 'font' },
      { text: 'Color', target: '.e-gridheader', id: 'color' },
      { text: 'Alignment', target: '.e-gridheader', id: 'alignment' },
      { text: 'Text-wrap', target: '.e-gridheader', id: 'textwrap' }
    ];
    this.customAttributes =  {class: 'customcss' }
  }
  contextMenuClick(args?: MenuEventArgs): void {
    this.args = args;
    console.log(this.args)
    if (this.args.item.id === 'color') {
      this.displaycolor = 'block'
    } else if(this.args.item.id === 'alignment'){
      this.displayalign = 'block'
    } else if(this.args.item.id === 'textwrap'){
      this.displaytextwrap = 'block';
      this.wrapSettings = { wrapMode: 'Content' };
    } else if(this.args.item.id === 'font'){
      this.displayfont = 'block'
    } else if(this.args.item.id === 'defaultvalue'){
      this.displaydefault = 'block'
    } else if(this.args.item.id === 'datatype'){
      this.displaydatatype = 'block'
    }
  }
  contextMenuOpen(arg?: BeforeOpenCloseEventArgs): void {
    this.argmo = arg;
    let elem: Element = this.argmo.event.target as Element;
    
  }
 
  
  ngOnInit() {
    this.initilaizeTarget();

  }

  
  public initilaizeTarget: EmitType<object> = () => {
  }
  public height: string = '50px';
  public dialogOpen: EmitType<object> = () => {
    
  }
  public onOpenDialog = (event: any): void => {
    this.template.show();
  }

  public onChange(args: ColorPickerEventArgs): void {
    this.choosedColor = args.currentValue.rgba;
    this.displaycolor = 'none';
    (this.treeGridObj as TreeGridComponent).dataSource = this.data; // Refresh the TreeGrid.
  }

  public onChangeAlign(alignargs: any): void {
    this.choosedAlign = alignargs.value;
    setTimeout(() => {
      this.displayalign = 'none';
    }, 300);
  }

  customiseCell(args: QueryCellInfoEventArgs) {
    // console.log(args.column?.field)
    if(args.column?.field === 'taskID' && this.choosedColor != '' && args.column?.field === this.args.column?.field){
      (args.cell as HTMLElement).style.color = this.choosedColor;
    }
    if(args.column?.field === 'taskID' && this.choosedAlign != '' && args.column?.field === this.args.column?.field){
      (args.cell as HTMLElement).style.textAlign = this.choosedAlign;
    }
    if(args.column?.field === 'taskID' && this.size != ''  && args.column?.field === this.args.column?.field){
      (args.cell as HTMLElement).style.fontSize = this.size;
    }
    if(args.column?.field === 'taskID' && this.choosedDatatype != '' && args.column?.field === this.args.column?.field){
      (args.cell as HTMLElement).style.fontSize = this.choosedDatatype;
    }
    if(args.column?.field === 'taskID' && this.choosedDefaultValue != '' && args.column?.field === this.args.column?.field){
      args.column.defaultValue = this.choosedDefaultValue;
    }
    if(args.column?.field === 'taskName' && this.choosedColor != '' && args.column?.field === this.args.column?.field){
      (args.cell as HTMLElement).style.color = this.choosedColor;
    }
    if(args.column?.field === 'taskName' && this.choosedAlign != '' && args.column?.field === this.args.column?.field){
      (args.cell as HTMLElement).style.textAlign = this.choosedAlign;
    }
    if(args.column?.field === 'taskName' && this.size != '' && args.column?.field === this.args.column?.field){
      (args.cell as HTMLElement).style.fontSize = this.size;
    }
    if(args.column?.field === 'taskName' && this.choosedDatatype != '' && args.column?.field === this.args.column?.field){
      (args.cell as HTMLElement).style.fontSize = this.choosedDatatype;
    }
    if(args.column?.field === 'taskName' && this.choosedDefaultValue != '' && args.column?.field === this.args.column?.field){
      args.column.defaultValue = this.choosedDefaultValue;
    }
    if(args.column?.field === 'startDate' && this.choosedColor != '' && args.column?.field === this.args.column?.field){
      (args.cell as HTMLElement).style.color = this.choosedColor;
    }
    if(args.column?.field === 'startDate' && this.choosedAlign != '' && args.column?.field === this.args.column?.field){
      (args.cell as HTMLElement).style.textAlign = this.choosedAlign;
    }
    if(args.column?.field === 'startDate' && this.size != '' && args.column?.field === this.args.column?.field){
      (args.cell as HTMLElement).style.fontSize = this.size;
    }
    if(args.column?.field === 'startDate' && this.choosedDatatype != '' && args.column?.field === this.args.column?.field){
      (args.cell as HTMLElement).style.fontSize = this.choosedDatatype;
    }
    if(args.column?.field === 'startDate' && this.choosedDefaultValue != '' && args.column?.field === this.args.column?.field){
      args.column.defaultValue = this.choosedDefaultValue;
    }
    if(args.column?.field === 'duration' && this.choosedColor != '' && args.column?.field === this.args.column?.field){
      (args.cell as HTMLElement).style.color = this.choosedColor;
    }
    if(args.column?.field === 'duration' && this.choosedAlign != '' && args.column?.field === this.args.column?.field){
      (args.cell as HTMLElement).style.textAlign = this.choosedAlign;
    }
    if(args.column?.field === 'duration' && this.size != '' && args.column?.field === this.args.column?.field){
      (args.cell as HTMLElement).style.fontSize = this.size;
    }
    if(args.column?.field === 'duration' && this.choosedDatatype != '' && args.column?.field === this.args.column?.field){
      (args.cell as HTMLElement).style.fontSize = this.choosedDatatype;
    }
    if(args.column?.field === 'duration' && this.choosedDefaultValue != '' && args.column?.field === this.args.column?.field){
      args.column.defaultValue = this.choosedDefaultValue;
    }
  }

  public onChangeFont(fontargs: any): void {
    this.size = fontargs.value;
  }
  public onChangeDataType(typeargs: any): void {
    this.choosedDatatype = typeargs.value;
  }

  cancelFont(){
    this.displayfont = 'none';
  }
  cancelDataType(){
    this.displaydatatype = 'none';
  }
  cancelDefault(){
    console.log(this.choosedDefaultValue)
    this.displaydefault = 'none'
  }
}
