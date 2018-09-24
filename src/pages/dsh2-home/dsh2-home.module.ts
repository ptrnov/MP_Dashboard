import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Dsh2HomePage } from './dsh2-home';
// import { Dsh2Card } from './dsh2-card';

@NgModule({
  declarations: [
    Dsh2HomePage,
    // Dsh2Card
  ],
  imports: [
    IonicPageModule.forChild(Dsh2HomePage),
  ],
})
export class Dsh2HomePageModule {}
