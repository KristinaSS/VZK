import {Component, Input} from '@angular/core';
import {Article} from "../../../models/article/article";

@Component({
  selector: 'app-vie-articl-content',
  templateUrl: './vie-articl-content.component.html',
  styleUrls: ['./vie-articl-content.component.css']
})
export class VieArticlContentComponent {
@Input()article: Article | undefined
}
