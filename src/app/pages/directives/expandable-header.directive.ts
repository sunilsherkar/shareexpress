import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { DomController } from '@ionic/angular';//Important for managing DOM events


@Directive({
  selector: '[myScrollVanish]'
})
export class ExpandableHeaderDirective { 
  @Input('myScrollVanish') scrollArea; 

  // To detect what position the header is in so that you don't trigger too many events into the dom
  private hidden: boolean = false;
  private triggerDistance: number = 20;

  constructor(private element: ElementRef, private renderer: Renderer2, private domCtrl: DomController) { 


  }

  ngOnInit(){
    
    console.log(this.scrollArea)

    // Wait until 'ion-scroll' element is added to 'ion-content'

        this.initStyles();
        this.scrollArea.ionScroll.subscribe((scrollEvent: CustomEvent) => {

          let delta = scrollEvent.detail.deltaY;

          if(scrollEvent.detail.currentY === 0 && this.hidden){
            this.show();
          }
          else if(!this.hidden && delta > this.triggerDistance){
            this.hide();
          } else if(this.hidden && delta < -this.triggerDistance) {
            this.show();
          }

        });
  }

  initStyles(){

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.element.nativeElement, 'transition', '0.3s linear');
    });

  }

  hide(){

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.element.nativeElement, 'min-height', '80px');
      this.renderer.setStyle(this.element.nativeElement, 'height', '80px');
     this.renderer.setStyle(this.element.nativeElement, 'opacity', '0.4');
      this.renderer.setStyle(this.element.nativeElement, 'padding', '0');
    });

    this.hidden = true;

  }

  show(){

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.element.nativeElement, 'height', '230px');
      this.renderer.removeStyle(this.element.nativeElement, 'opacity');
      this.renderer.removeStyle(this.element.nativeElement, 'min-height');
      this.renderer.removeStyle(this.element.nativeElement, 'padding');
    });

    this.hidden = false;

  }


}
