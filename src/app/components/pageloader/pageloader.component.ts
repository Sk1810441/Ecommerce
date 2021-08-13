import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../service/backend.service';

@Component({
  selector: 'app-pageloader',
  templateUrl: './pageloader.component.html',
  styleUrls: ['./pageloader.component.css']
})
export class PageloaderComponent implements OnInit {

  constructor( private BackendService:BackendService ) { }

  isLoading = true;

  ngOnInit(): void {

    this.BackendService.isLoading.subscribe(result => {
      this.isLoading = result;
    });
  }

}
