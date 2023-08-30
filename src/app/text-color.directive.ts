import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { TaskStatus } from './model/task-status.enum';
import { Task } from './model/task.model';

@Directive({
  selector: '[TextColorDirective]'
})
export class TextColorDirective {
  @Input() TextColorDirective!: Task;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.TextColorDirective) {
      const status = this.TextColorDirective.status;
      let color = '';

      switch (status) {
        case TaskStatus.EN_COURS:
          color = 'blue';
          break;
        case TaskStatus.A_FAIRE:
          color = 'red';
          break;
        case TaskStatus.TERMINEE:
          color = 'green';
          break;
        default:
          color = 'black';
          break;
      }

      this.renderer.setStyle(this.el.nativeElement, 'color', color);
    }
  }
}
