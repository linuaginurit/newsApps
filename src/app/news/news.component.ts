import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news=[
    {
      id:1,
      title:"Keakraban Jokowi dengan Para Pemimpin Negara di KTT G7",
      content :"Elmau: Presiden Joko Widodo (Jokowi) mengikuti rangkaian pertemuan dengan kelompok negara kaya G7 di Elmau, Jerman. Seperti biasa, para petinggi negara melakukan foto bersama di saat pertemuan,atu hal yang menarik adalah keakraban yang diperlihatkan oleh Presiden Jokowi dengan Presiden Amerika Serikat (AS) Joe Biden. Jokowi tampak berdiri di paling depan diapit oleh tuan rumah KTT G7 yakni Kanselir Olaf Scholz bersama dengan Biden.      "
    },
    {
      id:2,
      title:"Meski Dapat Fasilitas Mewah, Ronaldinho Masih Mengeluh di Rumah Raffi Ahmad, Ternyata Soal Ini",
      content :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id:3,
      title:"Roy Suryo Sentil Pesawat Jokowi Terbang Bolak-balik di Langit Jerman Buang-buang Avtur, Ini Kata Pengamat Penerbangan",
      content :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id:4,
      title:"Cinta Laura Jadi Komisaris Perusahaan EBT Milik Bobby Gafur",
      content :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ];

  search :string|null="";
  tag:string | null ="";

  constructor(private router:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.router.queryParams.subscribe(param=>{
      this.search = param['search'] ;
      console.log(param)
    })
    this.router.fragment.subscribe(fr=>{
      console.log("fragment", fr);
    })
   }

}
