import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video';
import { ModalController } from '@ionic/angular';
import { ReproductorComponent } from '../components/reproductor/reproductor.component';
import { ReproductorCanalesComponent } from '../components/reproductorCanales/reproductorCanales.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  myVideos : any[] = [];
  canales : any[] = [];
  constructor(private videoService: VideoService, private modalCtrl: ModalController) {}

  ngOnInit() {
    const allCategories = this.videoService.getCategories();
    const uniqueCategories = new Set<string>();
    allCategories.forEach(cats => cats.forEach(c => uniqueCategories.add(c)));

    this.myVideos = Array.from(uniqueCategories).map(category => ({
      category: category,
      videos: this.videoService.getVideos().filter(video => video.category.includes(category))
    }));
    this.canales = this.videoService.getCanales();
  }

  async reproducir(video: any) {
    const modal = await this.modalCtrl.create({
      component: ReproductorComponent, 
      componentProps: {
        videoRecibido: video
      }
    });
    await modal.present();
  }

  async reproducirCanal(canal: any) {
    const modal = await this.modalCtrl.create({
      component: ReproductorCanalesComponent,
      componentProps: {
        videoRecibido: canal
      }
    });
    await modal.present();
  }

}
