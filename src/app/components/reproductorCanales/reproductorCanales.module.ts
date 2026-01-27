import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // <-- Esto es lo que falta
import { ReproductorCanalesComponent } from './reproductorCanales.component';

@NgModule({
  declarations: [
    ReproductorCanalesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ReproductorCanalesComponent] // para que home pueda verlo 
})
export class ReproductorCanalesModule {}