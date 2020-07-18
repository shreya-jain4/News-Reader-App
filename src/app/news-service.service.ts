import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NewsData} from './news-data';
import { map } from 'rxjs/operators';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  key = 'c4cbc1e47ae34e4da48577668284714b';
  constructor(private http: HttpClient) { }
  //constructor(){}
  getTopHeadLines(countryCode:string, categoryCode:string):Observable<NewsData>{
    
    return this.http.get<NewsData>('http://localhost:8080/getNews?country='+countryCode+'&category='+categoryCode,
     {observe: 'response'}).pipe(map(resp=>{
       let data: any=resp.body;
       return data;
     })
     );   
  }
  getNewsHeadlines():Observable<Article[]>{
    
    return this.http.get<Article[]>('http://localhost:8080/getNews?country=us&category=business',
     {observe: 'response'}).pipe(map(resp=>{
       let data: any=resp.body;
       return data;
     })
     );   
  }
  getNews(countryCode:string, categoryCode:string){
    //return this.http.get('http://localhost:8080/getNews?country='+countryCode+'&category='+categoryCode).pipe(map((res:Response)=>res));   
    return this.http.get('https://newsreaderapi.herokuapp.com/getNews?country='+countryCode+'&category='+categoryCode).pipe(map((res:Response)=>res));   
  }
  // getNewsFromApi(){
  //   //return this.http.get('http://localhost:8080/getNews?country='+countryCode+'&category='+categoryCode).pipe(map((res:Response)=>res));   
  //  // return this.http.get('https://newsreaderapi.herokuapp.com/getNews?country='+countryCode+'&category='+categoryCode).pipe(map((res:Response)=>res));   
  //  return this.http.get('https://newsapi.org/v2/top-headlines?apiKey=c4cbc1e47ae34e4da48577668284714b&country=us&category=health').pipe(map((res:Response)=>res));   
  // }
}
