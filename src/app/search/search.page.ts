import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video';
import { ModalController } from '@ionic/angular';
import { ReproductorComponent } from '../components/reproductor/reproductor.component';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
  standalone: false,
})
export class SearchPage implements OnInit {
  videos: any[] = [];
  filteredVideos: any[] = [];

  constructor(private videoService: VideoService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.videos = this.videoService.getVideos();
    this.filteredVideos = this.videos;
  }

  filterVideos(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredVideos = this.videos.filter(video => video.title.toLowerCase().includes(query));
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
}
