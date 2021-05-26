import {Component, Input, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() currentPage: any;
  @Input() productCount: number;

  // MatPaginator Output
  pageEvent: PageEvent;

  length = 500;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;


  constructor() {
  }

  ngOnInit(){
  }

  counter(i = 1) {
    return new Array(i);
  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    console.log(event);
  }


}
