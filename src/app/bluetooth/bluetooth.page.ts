import { Component, OnInit, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { LoadingService } from '../Services/loading.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.page.html',
  styleUrls: ['./bluetooth.page.scss'],
})
export class BluetoothPage implements OnInit {


  public devices:any[] = []
  public idDipositivoConectado:any

  constructor(private ble: BLE , 
    private ngZone:NgZone,
    private loadingService:LoadingService, 
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  public Scan(){
    this.devices=[]
    this.ble.scan([],10).subscribe(
      device => this.onDeviceDicovered(device)
    )
  }

  public onDeviceDicovered(device){
    //console.log('Discovered' + JSON.stringify(device,null,2))
    this.ngZone.run(()=>{
      this.devices.push(device)
      console.log(device)
    })
  }

  public fecharPage(){
    // this.ble.connect(this.idDipositivoConectado).subscribe(data=>{
    //   this.loadingService.presentToast("Bluetooth desconectado")
    // },error=>{
    //   alert("Erro ao desconectar " + error)
    //   return
    // })
    this.navCtrl.navigateForward('folder/Inbox')
    this.devices=[]
  }

  public connectBle(device:any){

    //this.loadingService.present("Conectando ...")
    this.ble.connect(device.id).subscribe(data=>{
      this.idDipositivoConectado = device.id
      this.loadingService.presentToast('Conectado ao dispositivo')
    },error=>{
      alert("Erro na conexão " + error)
      this.loadingService.dismiss()
    })
  }


}
