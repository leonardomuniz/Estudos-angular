import { Component } from '@angular/core';
import { pokemon } from '../interfaces/pokemon';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent {
  public pokemon: pokemon = {
    name: 'Blastoise',
    type: 'Water',
    height: 2.3,
  };
  public imgSrc: string =
    'https://scontent.fbsb8-2.fna.fbcdn.net/v/t39.30808-6/330320153_904365944240959_901970727871830546_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0qF1DhvG56sAX_px4D0&_nc_oc=AQn6-M_9lxNYCcKw-hdmfxTaiOH6P7BU_5BM55ewMhgThNzlmT7r9HGaPWthXi86wNiTF5FBNItmEbLKtAm2zzJg&tn=m2j5mzeJ0jyM-tKR&_nc_ht=scontent.fbsb8-2.fna&oh=00_AfC8uubr2fp8UM0pr4xzSkozEHE5jF2GCB5UW0JqLOm3YQ&oe=63EED07F';
  public imgTitle: string = 'na minha mão é mais barato';
  constructor() {}
}
