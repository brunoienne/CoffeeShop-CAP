using {exam.coffeeshop as cs} from '../db/schema';

@path: '/coffee'
service CoffeeShopService {
    entity Orders     as projection on cs.Orders;
    entity OrderItems as projection on cs.OrderItems;

}
