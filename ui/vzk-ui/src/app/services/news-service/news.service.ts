import {Injectable} from '@angular/core';
import {Article} from "../../models/article/article";
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

  getArticle(id: string | null | undefined) {
    let token = sessionStorage.getItem("token");
    token = token || 'anonymous';
    return this.http.get<Article>('/server/article/{id}?Article=' + id,
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        })
      });
  }
}
