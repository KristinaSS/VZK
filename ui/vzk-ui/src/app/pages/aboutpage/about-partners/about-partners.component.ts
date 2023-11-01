import {Component, Input, OnInit} from '@angular/core';
import {MiscService} from "../../../services/misc-service/misc.service";
import {Translation} from "../../../models/translation/translation";

@Component({
  selector: 'app-about-partners',
  templateUrl: './about-partners.component.html',
  styleUrls: ['./about-partners.component.css']
})
export class AboutPartnersComponent implements OnInit{
  partners: any;

  @Input() translationsAbout!: { [key: string]: Translation };

  constructor(private miscService: MiscService) {
  }

  redirectToPartnerWebsite(partnerUrl: string) {
    window.open(partnerUrl, '_blank');
  }

  ngOnInit(): void {
    this.partners = this.miscService.getPartners();
  }

  getTranslation(id: string){
    return this.translationsAbout[id].content;
  }
}
