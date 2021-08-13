import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../../service/backend.service';
import { category } from '../../model/homescreen.model';
import { JpPreloadService } from '@jaspero/ng-image-preload';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  category_list:category[];
  message:string;
  status:boolean=false;

  constructor( private router: Router , private BackendService:BackendService ,private preload: JpPreloadService) {}

  ngOnInit(): void {
  this.preload.initialize();
   this.BackendService.homescreen(parseInt(sessionStorage.getItem("seller_code")))
    .subscribe(
      data => {
        if (data) {
          if(data.result.status){
            this.category_list = data.result.data;
            for (var category of this.category_list) {
              if(category.product_list.length >= 4){
                this.status=true;
              }
            }
            if(!this.status){
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

  viewAll(category_id:number){
    this.router.navigate(['/list/'+category_id]);
  }

  viewProduct(product_id:number){
    this.router.navigate(['/product/'+product_id]);
  }

}
