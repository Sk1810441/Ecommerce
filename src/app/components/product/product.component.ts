import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,} from '@angular/router';
import { BackendService } from '../../service/backend.service';
import { Productlist  } from '../../model/productlist.model';
import { Product  } from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productid:number;
  product:Product;
  productlist:Productlist[];
  message :string;

  constructor(private router: Router ,private activatedRoute: ActivatedRoute, private BackendService:BackendService) { }

  ngOnInit(): void {
    this.productid =  parseInt(this.activatedRoute.snapshot.paramMap.get('productid'));
    console.log(this.productid);
  }


}
