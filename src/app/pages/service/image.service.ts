
import {Injectable, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
 import { AngularFireStorage, AngularFireUploadTask,AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
@Injectable()

export class ImageService {
  uer1 :any ="";
 constructor(
    @Inject(DOCUMENT) private document: Document ,   private storage: AngularFireStorage,    private database: AngularFirestore
  ) { }

  public promptForVideo(): Promise<File> {
    return new Promise<File>((resolve, reject) => {
      // make file input element in memory
      const fileInput: HTMLInputElement = this.document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'video/*';
      fileInput.setAttribute('capture', 'camera');
      // fileInput['capture'] = 'camera';
      fileInput.addEventListener('error', event => {
        reject(event.error);
      });
      fileInput.addEventListener('change', event => {
        resolve(fileInput.files[0]); 
      });
      // prompt for video file
      fileInput.click();
    });
  }

  public generateThumbnail(videoFile: Blob): Promise<string> { 
    
    const video: HTMLVideoElement = this.document.createElement('video');
    const canvas: HTMLCanvasElement = this.document.createElement('canvas');
    const context: CanvasRenderingContext2D = canvas.getContext('2d');
    return new Promise<string>((resolve, reject) => {
      canvas.addEventListener('error',  reject);
      video.addEventListener('error',  reject);
      video.addEventListener('canplay', event => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
       
        //this.savefile(canvas.toDataURL());
        resolve(canvas.toDataURL());
      });
      if (videoFile.type) {
        video.setAttribute('type', videoFile.type);
      }
      video.preload = 'auto';
      video.src = "assets/videos/3.mp4" //window.URL.createObjectURL(videoFile);
        
      // this.savefile(window.URL.createObjectURL(videoFile));
      video.load();
    });
  }

  public generateThumbnail1(url): Promise<string> { 
     
    const video: HTMLVideoElement = this.document.createElement('video');
    const canvas: HTMLCanvasElement = this.document.createElement('canvas');
    const context: CanvasRenderingContext2D = canvas.getContext('2d');
    return new Promise<string>((resolve, reject) => {
      canvas.addEventListener('error',  reject);
      video.addEventListener('error',  reject);
      video.addEventListener('canplay', event => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        
        //this.savefile(canvas.toDataURL());
        resolve(canvas.toDataURL());
      });
     /* if (videoFile.type) {
        video.setAttribute('type', videoFile.type);
      }*/
      video.preload = 'auto';
      video.src = url ;//"assets/videos/3.mp4" //window.URL.createObjectURL(videoFile);
         
      video.load();
    });
  }
 savefile(thumbnailData)
  { 
      debugger;
    
    const path = `Status/${new Date().getTime()}_${'Sun.jpg'}`;
     
    const fileRef = this.storage.ref(path);

    // The main task
     this.storage.upload(path, thumbnailData );

    // Get file progress percentage
    
     
  }

}