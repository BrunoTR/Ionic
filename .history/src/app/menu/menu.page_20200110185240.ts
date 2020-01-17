import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from 'src/shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe((dishes: Dish[]) => console.log(dishes));
  }

}
