import {Injectable} from '@angular/core';
import {Article} from "../../models/article/article";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {
  }


  getMoreArticles(page: number) {
    let token = sessionStorage.getItem("token");
    token = token || 'anonymous';
    return this.http.get<Article[]>('/server/article/all/active?page=' + page,
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        })
      });
  }

  getArticle(id: string | null | undefined): Observable<Article | undefined> {
    const article1 = new Article('1', '2023-09-27',
      `
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus tellus sit amet leo dictum luctus ac sit amet felis. Vivamus porttitor congue luctus. Proin arcu elit, dictum id ipsum eu, sagittis tincidunt tellus. Donec viverra urna efficitur, rutrum eros quis, auctor odio. Phasellus vitae finibus libero. Sed sit amet pulvinar nulla. Nullam ultrices rhoncus sagittis. Donec blandit maximus erat, eget ornare velit sodales ut. Suspendisse a tortor a risus scelerisque posuere cursus et leo. In eget semper erat, eu facilisis eros. Sed ac accumsan libero, a molestie lacus. Sed lacinia ipsum ac nunc tincidunt pretium. Praesent ullamcorper mi at posuere cursus. Nunc sed ligula massa. Maecenas nec efficitur nisl.
</p>
<p>
  Proin vehicula ornare facilisis. Nam placerat sapien dui, eu suscipit eros tempus eget. Aenean eu ante eu elit ultricies lacinia id in felis. Nulla sit amet gravida quam, vitae tempus leo. Morbi eu sapien accumsan felis sollicitudin scelerisque sit amet at libero. Praesent ut mi augue. Sed mattis eros nec suscipit sodales. Nam eu lacus a odio bibendum mattis. Donec feugiat lectus tortor, fermentum iaculis neque luctus vel.
</p>
<p>
  Nunc ac sapien euismod magna tempor dapibus ut vitae ex. Aliquam lobortis turpis et tellus suscipit, quis placerat orci faucibus. Phasellus porttitor facilisis enim, ut gravida metus pharetra ut. Nulla suscipit egestas mollis. Sed non ex lorem. Phasellus ligula elit, fermentum quis vulputate vel, bibendum eget diam. Nunc accumsan lacus et nibh bibendum condimentum. Cras magna felis, placerat non tristique ut, tincidunt eu sem. Donec egestas, purus eu pellentesque convallis, orci risus mattis sapien, ut tristique risus nisi at nisl.
</p>
<div class="image-container">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62AjFzFCrwzQhGKOKZglZG3hjgQ9nYaCiwg&usqp=CAU" alt="Your Image">
</div>
<p>
  Aliquam erat volutpat. Phasellus gravida vel justo in tempor. Pellentesque eu turpis neque. Phasellus vitae nisl at tellus commodo rhoncus. Curabitur rhoncus fermentum convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque elit velit, congue in congue sit amet, pellentesque vehicula ex. Sed bibendum, orci in aliquam euismod, est diam elementum augue, quis malesuada tortor nulla eu erat. Suspendisse orci felis, gravida vitae ornare at, ullamcorper vitae sem.
</p>
<p>
  Quisque porta pulvinar augue sed rhoncus. Integer finibus urna id cursus posuere. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sit amet orci id turpis aliquam faucibus. Aenean id mi ut magna tincidunt efficitur at et massa. Mauris odio augue, iaculis sed blandit non, mollis ut ante. Fusce pulvinar blandit nisl quis bibendum. In suscipit facilisis magna, tristique rhoncus augue vestibulum non. Aenean mattis ligula mi, eu bibendum dolor varius ut. In bibendum in lacus sed euismod. In commodo placerat hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
</p>

`,
      'https://resources.esportsinsider.com/esportsinsider/2021/04/league-of-legends-world-championship-RIOT.jpg',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    return of(article1);
  }
}
