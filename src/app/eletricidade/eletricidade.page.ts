import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { MqttService, IMqttMessage } from 'ngx-mqtt';

@Component({
  selector: 'app-eletricidade',
  templateUrl: './eletricidade.page.html',
  styleUrls: ['./eletricidade.page.scss'],
})
export class EletricidadePage implements OnInit {

  public valorConta:any=0
  public valorMedicao:any=0
  public valorMedia:any=0
  public valorKwh:any=0
  public mensagemMedicao:String
  public mensagemMedia:String
  public subscriptionMedicao: Subscription;
  public subscriptionMedia: Subscription;

  constructor(
    private navCtrl: NavController,
    public navController:NavController,
    private mqttService:MqttService)

    {
      this.subscriptionMedicao = this.mqttService.observe('EnviaMedicaoMedidorCorrente').subscribe((message: IMqttMessage) => {
        this.mensagemMedicao = message.payload.toString();
        console.log(this.mensagemMedicao)
        this.valorMedicao = this.mensagemMedicao
    
      })

      this.subscriptionMedicao = this.mqttService.observe('EnviaMediaMedidorCorrente').subscribe((message: IMqttMessage) => {
        this.mensagemMedia = message.payload.toString();
        console.log(this.mensagemMedia)
        this.valorMedia = this.mensagemMedia
        this.valorMedia = ((this.valorMedia).valueOf() * 127/1000*24).toFixed(2)

        this.valorConta = ((this.valorMedia).valueOf()*this.valorKwh*30).toFixed(2)
        this.valorConta = "R$" + this.valorConta
    
      })

      this.mqttService.onConnect.subscribe((e) => {
        console.log('onConnect', e);
      });
    
      mqttService.onError.subscribe((e) => {
        console.log('onError', e);
      });
      mqttService.onClose.subscribe(() => {
        console.log('onClose');
      });
      mqttService.onReconnect.subscribe(() => {
        console.log('onReconnect');
      });
    }
  

  ngOnInit() {
  }

  public fecharPage(){
    this.navCtrl.navigateForward('folder/Inbox')
  }

}
