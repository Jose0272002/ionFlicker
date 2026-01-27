import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HomePageRoutingModule } from './home-routing.module';
import { ReproductorModule } from '../components/reproductor/reproductor.module';
import { ReproductorCanalesModule } from '../components/reproductorCanales/reproductorCanales.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomePageRoutingModule,
    ReproductorModule,
    ReproductorCanalesModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
