import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() currentPage: any;
  productCount: number;
  private querySub: Subscription;
  
  constructor(private productService: ProductService,
              private route: ActivatedRoute
              ) {
  }

  ngOnInit(){
    this.querySub = this.route.queryParams.subscribe(() => {
      this.update();
  });
  }

  ngOnDestroy(): void {
    this.querySub.unsubscribe();
  }

  update() {
   this.getCountAllInCategory().subscribe(count => {
      this.productCount = count;
    });
  }

  getCountAllInCategory() {
    const type = this.route.snapshot.url[1].path;
    return this.productService.getCountAllInCategory(+type);
}

  counter(i = 1) {
    return new Array(i);
  }
}
