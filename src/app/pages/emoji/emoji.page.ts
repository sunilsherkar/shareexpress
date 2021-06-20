import { Component, OnInit } from '@angular/core';
import { VideoEditor } from '@ionic-native/video-editor/ngx';
import { PopoverController, NavParams, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.page.html',
  styleUrls: ['./emoji.page.scss'],
})
export class EmojiPage implements OnInit {
 data: any;
FilePath : any;
filterPath: any;
  constructor( private navParams: NavParams ) { 
  	debugger;
  this.data = this.navParams.data;
  this.FilePath =this.data.FilePath;
  this.filterPath="https://firebasestorage.googleapis.com/v0/b/smade-fe848.appspot.com/o/filter%2F1.mp4?alt=media&token=cefd509b-47b5-4d92-ba69-7a9631fc44ba";
} 

  ngOnInit() {
  }
}

/*convert()
{
	this.videoEditor.transcodeVideo({
  fileUri: 'asset/1.mov',
  outputFileName: 'output.mp4' 
  , outputFileType: VideoEditorOptions.OutputFileType.MPEG4, // android is always mp4
 
})
.then((fileUri: string) => console.log('video transcode success', fileUri))
.catch((error: any) => console.log('video transcode error', error));
}*/

