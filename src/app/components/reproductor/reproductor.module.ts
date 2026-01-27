import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // <-- Esto es lo que falta
import { ReproductorComponent } from './reproductor.component';

@NgModule({
  declarations: [
    ReproductorComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ReproductorComponent] // para que Tab1 pueda verlo 
})
export class ReproductorModule { }