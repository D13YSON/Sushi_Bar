import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor() {}
  
items = [
  { id: 0, value: '1', img:'/assets/img/sushi.jpg', titulo: 'Sushi', preco: 'R$ 18,90', detalhar:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)' },
  { id: 1, value: '1', img:'/assets/img/sushi.jpg', titulo: 'Sushi', preco: 'R$ 18,90', detalhar:'' },
  { id: 2, value: '1', img:'/assets/img/sushi.jpg', titulo: 'Sushi', preco: 'R$ 18,90', detalhar:'' },
  { id: 3, value: '1', img:'/assets/img/sushi.jpg', titulo: 'Sushi', preco: 'R$ 18,90', detalhar:'' },
  { id: 4, value: '1', img:'/assets/img/sushi.jpg', titulo: 'Sushi', preco: 'R$ 18,90', detalhar:'' },
  { id: 5, value: '1', img:'/assets/img/sushi.jpg', titulo: 'Sushi', preco: 'R$ 18,90', detalhar:'' },
  
  
 
]

trackItems(index: number, itemObject: any) {
  return itemObject.id;
}
}
