import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnasayfaComponent } from './anasayfa.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AnasayfaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports:[
    AnasayfaComponent
  ]
})
export class AnasayfaModule { }
