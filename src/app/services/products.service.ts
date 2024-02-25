import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 products :IProduct[] = [
    {
      id: "1",
      name: '',
      price: 21500,
      quantity: 0,
      image:"https://cdn.dummyjson.com/product-images/1/1.jpg",
      categoryId: 1,
      category:"Smart Phone"
    },
    {
      id: "2",
      name: 'iPhone X',
      price: 30000,
      quantity: 8,
      image:
        'https://cdn.dummyjson.com/product-images/2/1.jpg',
      categoryId: 1,
      category:"Smart Phone"
    },
    {
      id: "3",
      name: 'Samsung Universe 9',
      price: 14000,
      quantity: 10,
      image:
        'https://cdn.dummyjson.com/product-images/3/1.jpg',
      categoryId: 1,
      category:"Smart Phone"
    },
    {
      id: "4",
      name: 'OPPOF19',
      price: 1500,
      quantity: 2,
      image:
        'https://cdn.dummyjson.com/product-images/4/3.jpg',
      categoryId: 1,
      category:"Smart Phone"
    },
    {
      id: "5",
      name: 'MacBook',
      price: 1500,
      quantity: 2,
      image:
        'https://cdn.dummyjson.com/product-images/6/1.png',
      categoryId: 2,
      category:"Laptop"
    },
    {
      id: "6",
      name: 'Samsung Galaxy Book',
      price: 1000,
      quantity: 10,
      image:
        'https://cdn.dummyjson.com/product-images/7/1.jpg',
      categoryId: 2,
      category:"Laptop"
    },
    {
      id: "7",
      name: 'Infinix INBOOK',
      price: 13000,
      quantity: 0,
      image:
        'https://cdn.dummyjson.com/product-images/9/thumbnail.jpg',
      categoryId: 2,
      category:"Laptop"
    },
    {
      id: "8",
      name: 'HP Pavilion 15-DK1056WM',
      price: 13000,
      quantity: 10,
      image:
        'https://cdn.dummyjson.com/product-images/10/1.jpg',
      categoryId: 2,
      category:"Laptop"
    },
    {
      id: "9",
      name: 'Oil Free Moisturizer',
      price: 999,
      quantity: 4,
      image:
        'https://cdn.dummyjson.com/product-images/18/1.jpg',
      categoryId: 3,
      category:"Skin Care"
    },
    {
      id: "10",
      name: 'Skin Beauty Serum',
      price: 3699,
      quantity: 3,
      image:
        'https://cdn.dummyjson.com/product-images/19/1.jpg',
      categoryId: 3,
      category:"Skin Care"

    },
    {
      id: "11",
      name: 'Freckle Treatment Cream',
      price: 3699,
      quantity: 3,
      image:
        'https://cdn.dummyjson.com/product-images/20/2.jpg',
      categoryId: 3,
      category:"Skin Care"

    },
    {
      id: "12",
      name: 'Tree Oil',
      price: 3699,
      quantity: 3,
      image:
        'https://cdn.dummyjson.com/product-images/17/1.jpg',
      categoryId: 3,
      category:"Skin Care"

    },
  ];
  myHeaders={}
  constructor(private http: HttpClient) {
    this.myHeaders={headers:new HttpHeaders({
      'Content-Type':'application/json',
    })}
   }
   getAllProduct(): IProduct[] {
    return this.products;
  }
  getall(){
    return this.http.get<IProduct[]>('http://localhost:3000/products')
  }
  createProduct(product:IProduct):Observable<IProduct>{

     return this.http.post<IProduct>(`http://localhost:3000/products`,JSON.stringify(product),this.myHeaders)
  }
  deletepro(productid:string):Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/products/${productid}`)
  }

  updateProduct(product:any): Observable<any> | undefined {
    return this.http.put<any>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }
  getAllProductbyMyApi(): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products`);
  }
  
  getProductById(prodId:number):IProduct|undefined{
    return this.products.find((product)=>product.id=="prodId");
  }


  getProductsByCatID(catID: number): IProduct | undefined {
    return this.products.find(product => product.categoryId === catID);
  }
  
}
