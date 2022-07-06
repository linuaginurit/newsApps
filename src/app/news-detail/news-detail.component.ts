import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  idNews:string|null=""
  title:string|null="";
  constructor(private route:ActivatedRoute) { }
  

  ngOnInit(){
    //karena menggunakan snapshot url berubah tapi tampilan tidak berubah.
    // this.idNews = this.route.snapshot.paramMap.get('id')
    //menggunakan async observable.subscribe
    this.route.paramMap.subscribe(notif=>{
      this.idNews = notif.get('id');
      this.title = notif.get('title');
    })
  }

}
