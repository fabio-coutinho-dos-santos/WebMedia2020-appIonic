import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingService } from '../Services/loading.service';
import { NavController } from '@ionic/angular';
import { LocalizationService } from '../Services/localization.service';
import { Mensagem } from '../Model/Mensagem';
import { Subscription } from 'rxjs';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import * as moment from 'moment';



@Component({
  selector: 'app-geolocalizacao',
  templateUrl: './geolocalizacao.page.html',
  styleUrls: ['./geolocalizacao.page.scss'],
  providers:[LoadingService,LocalizationService]
})
export class GeolocalizacaoPage implements OnInit {

  public latitude:any
  public longitude:any
  private subscription: Subscription;
  public message: string;
  private tempoInicial:string=''
  private diferencaTempo

  constructor(private geolocation: Geolocation,
    private localizationService : LocalizationService, 
    private loadingService:LoadingService,
    private _mqttService: MqttService,
    private navCtrl: NavController) {

      this.subscription = this._mqttService.observe('EnviaLocation').subscribe((message: IMqttMessage) => {
        this.message = message.payload.toString();
        console.log(this.message)

        if(this.message == '1'){
          this.tempoInicial = moment().valueOf().toString()
          this.getLocalization()
        }
      });

     }

  ngOnInit() {


  }

  public getLocalization(){


    //this.loadingService.present("Buscando localização")
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude=resp.coords.latitude
      this.longitude=resp.coords.longitude
      this.unsafePublish("RecebeLocalizacaoFront3",this.latitude+'#'+this.longitude)

      //this.loadingService.dismiss()

      let tempoFinal =  moment()

      this.diferencaTempo = tempoFinal.diff(parseInt(this.tempoInicial)).valueOf()

      let msg = new Mensagem(
        'Ionic',
        this.latitude + " # " + this.longitude,
        this.tempoInicial,
        tempoFinal.valueOf().toString(),
        this.diferencaTempo.valueOf()
      )

      this.localizationService.postMensagem(msg)

      .subscribe((resp:Mensagem)=>{
        console.log(resp)
        this.loadingService.presentToast('Mensagem Enviada com Sucesso !!')
      },(err)=>{
        alert("ERRO ao enviar mensagem!!")
      })


     }).catch((error) => {
       alert('Error getting location' + error);
       this.loadingService.dismiss()
     });

  }

  public fecharPage(){
    this.navCtrl.navigateForward('folder/Inbox')
    this.latitude=''
    this.longitude=''
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: false});
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
