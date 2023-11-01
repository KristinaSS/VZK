import {Component, OnInit} from '@angular/core';
import {MiscService} from "../../../services/misc-service/misc.service";

@Component({
  selector: 'app-about-partners',
  templateUrl: './about-partners.component.html',
  styleUrls: ['./about-partners.component.css']
})
export class AboutPartnersComponent implements OnInit{
  partners: any;
  paragraphText: any;

  constructor(private myscService: MiscService) {
  }

  redirectToPartnerWebsite(partnerUrl: string) {
    window.open(partnerUrl, '_blank');
  }

  ngOnInit(): void {
    this.partners = this.myscService.getPartners();
    this.paragraphText = this.myscService.getPartnersText();
  }
}
