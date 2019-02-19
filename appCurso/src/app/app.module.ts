import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodelComponent } from './viewmodel/viewmodel.component';
import { ExmethodComponent } from './exmethod/exmethod.component';
import { ExpropertybindingComponent } from './expropertybinding/expropertybinding.component';
import { ExeventbindingComponent } from './exeventbinding/exeventbinding.component';
import { Ex2waybindingComponent } from './ex2waybinding/ex2waybinding.component';
import { ExdirectivengComponent } from './exdirectiveng/exdirectiveng.component';
import { ExdirectivengstyleComponent } from './exdirectivengstyle/exdirectivengstyle.component';
import { ExdirectivengclassComponent } from './exdirectivengclass/exdirectivengclass.component';
import { ExdirectivengforComponent } from './exdirectivengfor/exdirectivengfor.component';
import { ExarrayobjectComponent } from './exarrayobject/exarrayobject.component';
import { ExdirectivengswitchComponent } from './exdirectivengswitch/exdirectivengswitch.component';
import { MenuitemDirective } from './menuitem.directive';
import { ExmydirectiveComponent } from './exmydirective/exmydirective.component';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component';
import { EuroPipe } from './euro.pipe'

@NgModule({
   declarations: [
      AppComponent,
      FechaactualComponent,
      CopyrightComponent,
      ViewmodelComponent,
      ExmethodComponent,
      ExpropertybindingComponent,
      ExeventbindingComponent,
      Ex2waybindingComponent,
      ExdirectivengComponent,
      ExdirectivengstyleComponent,
      ExdirectivengclassComponent,
      ExdirectivengforComponent,
      ExarrayobjectComponent,
      ExdirectivengswitchComponent,
      MenuitemDirective,
      ExmydirectiveComponent,
      FatherComponent,
      SonComponent,
      EuroPipe
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
