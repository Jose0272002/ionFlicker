import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Hls from 'hls.js';

@Component({
  selector: 'app-reproductorCanales',
  templateUrl: './reproductorCanales.component.html',
  styleUrls: ['./reproductorCanales.component.scss'],
  standalone: false
})
export class ReproductorCanalesComponent implements OnInit {

  @Input() videoRecibido: any;
  @ViewChild('videoPlayer') videoElementRef!: ElementRef;

  hls: Hls | null = null;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  ngAfterViewInit() {
    if (this.videoRecibido && this.videoRecibido.link) {
      this.playVideo(this.videoRecibido.link);
    }
  }

  playVideo(src: string) {
    const video = this.videoElementRef.nativeElement;

    if (Hls.isSupported()) {
      this.hls = new Hls();
      this.hls.loadSource(src);
      this.hls.attachMedia(video);
      this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Soporte nativo para Safari (iOS/Mac)
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play();
      });
    }
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  ngOnDestroy() {
    if (this.hls) {
      this.hls.destroy();
    }
  }
}

