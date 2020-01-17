import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from 'src/shared/dish';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Promotion } from 'src/shared/promotion';
import { Leader } from 'src/shared/leader';
import { baseURL } from 'src/shared/baseurl';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService
    ) { }

    dish: Dish;
    promotion: Promotion;
    leader: Leader;
    dishErrMsg: string;
    promotionErrMsg: string;
    leaderErrMsg: string;
    baseURL: string;

  ngOnInit() {
    this.dishService.getFeaturedDish()
      .subscribe((dish: Dish) => this.dish = dish,
        errmess => this.dishErrMsg = errmess
      );
    this.promotionService.getFeaturedPromotion()
      .subscribe((promo: Promotion) => this.promotion = promo,
        errmess => this.promotionErrMsg = errmess
      );
    this.leaderService.getFeaturedLeader()
      .subscribe((leader: Leader) => this.leader = leader,
        errmess => this.leaderErrMsg = errmess
      );
    this.baseURL = baseURL;
  }
}
