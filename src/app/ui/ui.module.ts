import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { AnasayfaModule } from './anasayfa/anasayfa.module';




@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AnasayfaModule
  ]
})
export class UiModule { }
