import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  panniers:any[]=[]

  constructor(public http:HttpClient) { }
}
