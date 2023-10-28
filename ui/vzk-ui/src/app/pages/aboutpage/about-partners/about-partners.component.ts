import {Component, OnInit} from '@angular/core';
import {MyscService} from "../../../services/mysc-service/mysc.service";

@Component({
  selector: 'app-about-partners',
  templateUrl: './about-partners.component.html',
  styleUrls: ['./about-partners.component.css']
})
export class AboutPartnersComponent implements OnInit{
  partners: any;
  paragraphText: any;

  constructor(private myscService: MyscService) {
  }

  redirectToPartnerWebsite(partnerUrl: string) {
    window.open(partnerUrl, '_blank');
  }

  ngOnInit(): void {
    this.partners = this.myscService.getPartners();
    this.paragraphText = this.myscService.getPartnersText();
  }
}
