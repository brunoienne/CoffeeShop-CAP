using {cuid} from '@sap/cds/common';

namespace exam.coffeeshop;

type CoffeeSize : String enum {
    S = 'Small';
    M = 'Medium';
    L = 'Large';
}

entity Orders : cuid {
    customerName           : String;
    totalAmount            : Decimal(10, 2);
    virtual discountAmount : Integer;
    virtual discount       : Integer;
    OrderItems             : Composition of many OrderItems
                                 on OrderItems.Order = $self;
}

entity OrderItems : cuid {
    coffeeName : String;
    size       : CoffeeSize;
    price      : Decimal(10, 2);
    quantity   : Integer;
    Order      : Association to Orders;
}
