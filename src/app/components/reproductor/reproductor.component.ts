import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss'],
  standalone: false
})
export class ReproductorComponent  implements OnInit {

  @Input() videoRecibido: any;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  cerrar() {
    this.modalCtrl.dismiss();
  }
}
