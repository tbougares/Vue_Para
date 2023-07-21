import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from '../categorie.service';
import { ShopService } from '../service/shop.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public serviceCategorie:CategorieService,public router:Router ,private shoping:ShopService) { }
  shop=this.shoping.panniers
  ngOnInit(): void {
    this.serviceCategorie.getAllcategorie().subscribe(res=>{
      if(res.valueOf())
      { var rep:any  
      rep=res.valueOf()
      this.serviceCategorie.categorie=rep;
      console.log(rep)}})
  }
  Catego(id:any){
    console.log(id.valueOf())
    this.router.navigate(['/shop',id])
  }
}
