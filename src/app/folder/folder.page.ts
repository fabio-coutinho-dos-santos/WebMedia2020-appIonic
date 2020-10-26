import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, public navController:NavController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  public goLocalizacao(){
    this.navController.navigateForward('geolocalizacao')
  }

  public goEletricidade(){
    this.navController.navigateForward('eletricidade')
  }

  public goBluetooth(){
    this.navController.navigateForward('bluetooth')
  }

}
