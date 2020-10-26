import { Injectable } from '@angular/core';
import { LoadingController, ToastController, ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = false;

  constructor(public loadingController: LoadingController,
    public toast:ToastController,
    public modalCtrl: ModalController) { }

  async present(mensagem:String) {
    this.isLoading = true;
    return await this.loadingController.create({
      message:mensagem.toString(),
      //mode:'ios',
      spinner:'bubbles'
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  async presentToast(mensagem:String) {
    const toast = await this.toast.create({
      message: mensagem.toString(),
      duration: 2000
    });
    toast.present();
    }

    async openModal(componente:any,valor:any){
      const modal = await this.modalCtrl.create({
        component: componente,
        componentProps: { value: valor }
      });
      return await modal.present();
    }
}