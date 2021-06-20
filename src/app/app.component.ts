import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ImageService } from '../app/pages/service/image.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../app/pages/service/authentication.service';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    private Token = 'UserID';
    private Token2 = 'fullName';

    public thumbnailData: string;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private ImageService: ImageService,
        private route: Router,
        private storage: Storage,
        private api: AuthenticationService
    ) {
        this.initializeApp();
    }


    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.storage.get(this.Token).then(res => {
                if (!res) {
                    this.route.navigateByUrl('login');
                }
                else {

                    this.api.isLogout.next(false);
                    this.api.UserID = res;
                    this.storage.get(this.Token2).then(res1 => {
                        this.api.fullName = res1;
                    });
                    this.route.navigateByUrl('dashboard');
                }
            });
        });
    }

}
