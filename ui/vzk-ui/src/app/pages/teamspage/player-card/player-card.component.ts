// player-card.component.ts

import { Component, Input, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements AfterViewInit {
  @Input() player: any; // Assuming 'player' is an Input property

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.rotateText();
  }

  private rotateText() {
    const textElement = this.el.nativeElement.querySelector('.text p');

    if (textElement) {
      const originalText: string = textElement.innerText; // Add type annotation here
      const rotatedText = originalText
        .split('')
        .map((char: string, i: number) => `<span style="transform:rotate(${i * 8}deg)">${char}</span>`)
        .join('');

      this.renderer.setProperty(textElement, 'innerHTML', rotatedText);
    }
  }
}
