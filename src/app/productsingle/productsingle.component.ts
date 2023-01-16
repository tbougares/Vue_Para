import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {
  produiSinglet:any
  constructor(private param:ActivatedRoute,public produit:CategorieService) { }

  ngOnInit(): void {
    this.produit.getbyIdProduit(this.param.snapshot.paramMap.get('id')).subscribe (res=>{
      
      var rep:any  
      rep=res.valueOf()
      this.produiSinglet=rep;
      console.log(this.produiSinglet)
      
    })
  }

}
