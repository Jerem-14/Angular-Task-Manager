// text-color.directive.ts
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Etat } from './Model/task.model';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {
  @Input('appTextColor') set appTextColor(etat: Etat) {
    const color = this.getColorForEtat(etat);
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private getColorForEtat(etat: Etat): string {
    switch (etat) {
      case Etat.EN_COURS:
        return 'blue';
      case Etat.A_FAIRE:
        return 'red';
      case Etat.TERMINEE:
        return 'green';
      default:
        return 'black';
    }
  }
}
