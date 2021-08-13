import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,} from '@angular/router';
import { BackendService } from '../../service/backend.service';
import { Productlist  } from '../../model/productlist.model';
import { JpPreloadService } from '@jaspero/ng-image-preload';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: Router ,private activatedRoute: ActivatedRoute, private BackendService:BackendService,private preload: JpPreloadService) {}

  categoryid:number;
  productList : Productlist[];
  message :string;

  ngOnInit(): void {
    this.preload.initialize();
    this.categoryid =  parseInt(this.activatedRoute.snapshot.paramMap.get('categoryid'));
    this.BackendService.productlist(parseInt(sessionStorage.getItem("seller_code")),this.categoryid)
    .subscribe(
      data => {
        if (data) {
          if(data.result.status){
            this.productList = data.result.data;
            if(!data.result.data.length){
              this.message = "Getting some error please try again"
            }
          }
          else{
            this.message = "Getting some error please try again"
          }        
        }
      },
      error => {
        this.message = "Getting some error please try again"
      });
  }
  
}
