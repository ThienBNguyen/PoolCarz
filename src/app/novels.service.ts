import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from './author';
import { Novel } from './novel';

@Injectable({
  providedIn: 'root'
})
export class NovelsService {

  constructor(private http:HttpClient) {}
  url = "http://localhost:5555/novels"
  getAuthors(){
    return this.http.get<Author[]>(this.url+"/authors");
  }
  addAuthor(author:Author){
    return this.http.post<Author>(this.url+"/authors", author);
  }
  updateAuthor(authorId:number, authorName:string){
    return this.http.put<Author>(this.url+"/authors/"+authorId+"/"+authorName, null);

  }
  deleteAuthor(authorId:number){
    return this.http.delete<Author>(this.url+"/authors/"+authorId);
  }
  addNovel(novel:Novel){
    return this.http.post<Novel>(this.url+"/book", novel);
  }
  updateNovel(novelId:number, novelTitle:string, novelYear:number, authId:number){
    return this.http.put<Novel>(this.url+"/book/"+novelId+"/"+novelTitle+"/"+novelTitle+"/"+authId,null)
  }
  deleteNovel(novelId:number){
    return this.http.delete<Novel>(this.url+"/book/" + novelId)
  }
}
