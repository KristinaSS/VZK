import { Component } from '@angular/core';

@Component({
  selector: 'app-about-partners',
  templateUrl: './about-partners.component.html',
  styleUrls: ['./about-partners.component.css']
})
export class AboutPartnersComponent {
  partners = [
    { name: 'Mercedes Benz', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png', websiteUrl: 'https://partner1.com' },
   { name: 'Monster energy', imageUrl: 'https://i.pinimg.com/originals/73/50/0b/73500b773699fd8fa25177ac8d6695ef.png', websiteUrl: 'https://partner3.com' },
    { name: 'Spotify', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png', websiteUrl: 'https://partner2.com' },

  ];

  paragraphText = 'Our goal is to work closely and collaboratively with partners to improve the esports entertainment experience for all.';

  redirectToPartnerWebsite(partnerUrl: string) {
    window.open(partnerUrl, '_blank');
  }
}
