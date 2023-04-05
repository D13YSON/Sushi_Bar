import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  public segment='0';
  constructor() {}

  public acrescentaProduto(){
    this.items.qtd += 1; 
  }
  
  public diminuiProduto(){
    this.items.qtd -=1;
  }

public items: any = [
  { id: 0, value: '1', img:'/assets/img/sushi.jpg', titulo: 'Sushi', preco: 'R$ 18,90', detalhar:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)', qtd:0},
  { id: 1, value: '1', img:'/assets/img/sashimi.jpg', titulo: 'Sashimi', preco: 'R$ 20,90', detalhar:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)', qtd: 0},
  { id: 2, value: '1', img:'/assets/img/temaki.jpg', titulo: 'Temaki', preco: 'R$ 30,90', detalhar:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)', qtd: 0 },
  { id: 3, value: '1', img:'/assets/img/lamem.jpg', titulo: 'Lamem', preco: 'R$ 15,90', detalhar:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)', qtd: 0 },
  { id: 4, value: '1', img:'/assets/img/uramaki.jpg', titulo: 'Uramaki', preco: 'R$ 18,90', detalhar:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)', qtd: 0 },
  { id: 5, value: '1', img:'/assets/img/teppan.jpg', titulo: 'Teppan', preco: 'R$ 18,90', detalhar:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)', qtd: 0 }, 
]

public items2: any = [
  { id: 0, value: '1', img:'/assets/img/shochu.jpg', titulo: 'Shohu', preco: 'R$ 18,90', detalhar:'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. ',  qtd: 0},
  { id: 1, value: '1', img:'/assets/img/awamori.jpg', titulo: 'Awamori', preco: 'R$ 18,90', detalhar:'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. ',  qtd: 0},
  { id: 2, value: '1', img:'/assets/img/umeshu.jpg', titulo: 'Umeshu', preco: 'R$ 18,90', detalhar:'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. ',  qtd: 0},
  { id: 3, value: '1', img:'/assets/img/habushu.jpg', titulo: 'Habushu', preco: 'R$ 18,90', detalhar:'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. ',  qtd: 0},
  { id: 4, value: '1', img:'/assets/img/amazake.jpg', titulo: 'Amazake', preco: 'R$ 18,90', detalhar:'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. ',  qtd: 0},
  { id: 5, value: '1', img:'/assets/img/bira.jpg', titulo: 'Bira', preco: 'R$ 18,90', detalhar:'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. ',  qtd: 0}
]

  trackItems(index: number, itemObject: any) {
  return itemObject.id;
  }
}
