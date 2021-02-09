import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'stp-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export default class ButtonComponent {

  @Input()
  primary: boolean = true;

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  label: string = 'button';

  @Input()
  backgroundColor: string = '#F5A623';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'stp-ui-button--primary' : 'stp-ui-button--secondary';

    return ['stp-ui-button', `stp-ui-button--${this.size}`, mode];
  }
}
