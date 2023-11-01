import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private el: ElementRef
  ) {
  }

  ngOnInit() {
    // Scroll to the "partners" section when the component is initialized
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment === 'partners') {
        this.scrollToPartners();
      }
    });

    // Scroll to the "partners" section when the route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.route.snapshot.fragment;
        if (fragment === 'partners') {
          this.scrollToPartners();
        }
      }
    });
  }

  private scrollToPartners() {
    const element = this.el.nativeElement.querySelector('#partners');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
