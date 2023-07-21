import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../categorie.service';
import { ShopService } from '../service/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  
  
  Cat:any
  Produits:any[]=[]
  constructor(private param:ActivatedRoute, private categorie:CategorieService , private shoping:ShopService) { }
  
  ngOnInit(): void {
    this.categorie.getbyIdCategorie(this.param.snapshot.paramMap.get('id')).subscribe(res=>{
      var rep:any
      rep=res.valueOf()
      this.Cat=rep
      this.Produits=this.Cat.ProduitCat
    })
    
  } 
  shop(i:any) {
    this.shoping.panniers.push(this.Produits[i])
  }
}
