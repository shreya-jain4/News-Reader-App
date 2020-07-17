import { Component,ViewChild } from '@angular/core';
import { NewsServiceService } from './news-service.service';
import { NewsData } from './news-data';
import { Article } from './article';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
// import {MatListModule} from '@angular/material/list';
import {MatAccordion} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';

export interface Country {
  value: string;
  viewValue: string;
}
export interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  articles: any;
  article: any;
  // countries: Array<string>=["India","Germany","USA","Australia"];
  // countryCodes: Array<string>=["in","de","us","au"];
  // categories: Array<string>=["Business","Entertainment","Health","General","Science","Sports","Technology"];
  // categoryCode: Array<string>=["business","entertainment","health","general","science","sports","technology"];
   categoryCode: string;
   countryCode: string;
  formSubmitted:boolean=true;
  //news:Article[] = [];

  countryControl = new FormControl('', [Validators.required]);
  categoryControl = new FormControl('', [Validators.required]);
  categories: Category[] = [
    { value: 'business', viewValue: 'Business' },
    { value: 'entertainment', viewValue: 'Entertainment' },
    { value: 'health', viewValue: 'Health' },
    { value: 'general', viewValue: 'General' },
    { value: 'science', viewValue: 'Science' },
    { value: 'sports', viewValue: 'Sports' },
    { value: 'technology', viewValue: 'Technology' }
  ];

  countries: Country[] = [
    { value: 'in', viewValue: 'India' },
    { value: 'de', viewValue: 'Germany' },
    { value: 'us', viewValue: 'USA' },
    { value: 'au', viewValue: 'Australia' }
  ];
  constructor(private newsService: NewsServiceService){
  }
//   ngOnInit() {
//     // this.newsService.getTopHeadLines()
//   	// 	.subscribe(
//     //     response => this.news=response
//     // );
//     // this.newsService.getNews().subscribe(response=>
//     //   this.news=response
//   //   //   );
//   // this.newsService.getNews().subscribe(response=>{
//   // //  let responseJson=JSON.stringify(response);
//   // //  var responseData= JSON.parse(responseJson);
//   // console.log(response) 
//   // this.articles=response;
//   // console.log(this.articles);
//   // }
//   // );
// }

ngOnInit(){
    
    // this.newsService.getNews().subscribe(response=>{
    //   //  let responseJson=JSON.stringify(response);
    //   //  var responseData= JSON.parse(responseJson);
    //   console.log(response) 
    //   this.articles=response;
    //   this.article=this.articles[0];
    //   console.log(this.article);
    //   console.log(this.articles);
    //   }
    //   );
}
sublitClicked(){
  if(this.categoryCode==undefined){
    this.categoryControl.markAsTouched();
    }
    if(this.countryCode==undefined){
    this.countryControl.markAsTouched();
    }
    else if(this.categoryCode!=undefined && this.countryCode!=undefined){
      this.formSubmitted=false;
  this.newsService.getNews(this.countryCode, this.categoryCode).subscribe(response=>{
    //  let responseJson=JSON.stringify(response);
    //  var responseData= JSON.parse(responseJson);
    console.log(response) 
    this.articles=response;
    this.article=this.articles[0];
    console.log(this.article);
    console.log(this.articles);
    }
    );
}
}
panelClosed(){
  this.formSubmitted=false;
}
panelOpened(){
  this.formSubmitted=true;
}
// this.newsService.getNewsHeadlines().subscribe(response=>
//   this.news=response as Article[]
//   );
//   console.log(this.news);
  //console.log(this.news.length);
//   expandPanel(matExpansionPanel, event): void {
//     event.stopPropagation(); // Preventing event bubbling

//     if (!this._isExpansionIndicator(event.target)) {
//       matExpansionPanel.close(); // Here's the magic
//     }
//   }

// private _isExpansionIndicator(target: EventTarget): boolean {
// const expansionIndicatorClass = 'mat-expansion-indicator';

// return (target['classList'] && target['classList'].contains(expansionIndicatorClass) );
// }

}


