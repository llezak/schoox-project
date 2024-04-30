import { Component, OnInit } from '@angular/core';
import { Product } from './_model/product';
import { ProductService } from './_service/product.service';
import { FormControl } from '@angular/forms';
import {debounceTime} from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'schoox-ui';
  inputControl = new FormControl('');
  products: Product[] = [];
  filtering : Product[] = [];


  constructor(private productService: ProductService,
    ) {

      this.inputControl.valueChanges.pipe(debounceTime(750)).subscribe(value=>{
this.filtering = this.products
if (value === '' ) {
  this.filtering = this.products
  console.log(this.filtering);

}
else{

  this.filtering = this.products.filter((item)=>item.title.toLowerCase().includes(value.toLowerCase()));
  console.log(this.filtering);
}
      });
}


  ngOnInit() {
this.productService.getProducts().subscribe(
  resp => {
      console.log(resp);
      this.products = resp.products;
      this.filtering = resp.products;
  },
  error => {

      console.log(error);
  }
);

  };


}
