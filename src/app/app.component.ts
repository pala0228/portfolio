import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  /**
   * @ignore
   */
  scrolledDown = false;

  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }
  /**
   * @ignore
   * Method to track user scrolling to refresh measurements for AOS and also
   * to activate and de activate icon at bottom of page
   * @param event
   */
  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    AOS.refresh();
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.scrolledDown = true;
    } else {
      this.scrolledDown = false;
    }
  }
}
