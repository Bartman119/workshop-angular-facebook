import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-keystrokes-panel',
  templateUrl: './keystrokes-panel.component.html',
  styleUrls: ['./keystrokes-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeystrokesPanelComponent implements OnInit {
  isVisible = false;

  @HostListener('window:keydown', ['$event']) onKeydown(evt: KeyboardEvent) {
    if (evt.key === '?') {
      this.isVisible = !this.isVisible;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
