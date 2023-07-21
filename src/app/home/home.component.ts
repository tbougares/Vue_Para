import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CategorieService } from '../categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories:any[]=[]

  constructor(public serviceCategorie:CategorieService, public router:Router) { }
  //Slider settings
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
  ngOnInit(): void {
    this.serviceCategorie.getAllcategorie().subscribe(res=>{
      if(res.valueOf())
      { var rep:any  
      rep=res.valueOf()
      this.categories=rep;
      //this.categories=this.categories.map(element=>element.ProduitCat.reverse())
      this.categories.forEach(element => {
        
        element.ProduitCat=element.ProduitCat.reverse().slice(0,4)
      });

      console.log(this.categories)
    }})
  }
  Single(id: any){
    console.log(id)
    this.router.navigate(["/product-single",id])

  }
  Shop(i:any){
    console.log(i)
    
  }
    
}