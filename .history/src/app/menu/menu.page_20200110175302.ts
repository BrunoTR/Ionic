import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private dishService: DishService) { }

  ngOnInit() {
    console.log("menu");
    this.dishService.getDishes();
  }

}
