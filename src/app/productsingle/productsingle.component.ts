import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../categorie.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {
  produiSinglet:any
  constructor(private meta:Meta ,public titl:Title,private param:ActivatedRoute,public produit:CategorieService) { }
  ngOnInit(): void {
    this.produit.getbyIdProduit(this.param.snapshot.paramMap.get('id')).subscribe (res=>{

      var rep:any
      rep=res.valueOf()
      this.produiSinglet=rep;
      console.log(this.produiSinglet)
      this.titl.setTitle( this.produiSinglet.nameProd)
      this.meta.addTags([
        {
          name: 'keywords',
          content:this.produiSinglet.keywords // Keywords

        },
        { name: 'robots', content: 'index, follow' },
        { name: 'description', content: this.produiSinglet.descProd },

      ]);

    })


  }

}
