
const cds = require('@sap/cds');

module.exports = class CoffeeShopService extends cds.ApplicationService {

    init() {

        const { Orders } = cds.entities('CoffeeShopService')

        this.after('READ', Orders, (orders) => {
            const days = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ];

            const today = days[new Date().getDay()];
            const discounts = {
                Monday: 10,
                Tuesday: 10,
                Wednesday: 10,
                Thursday: 5,
                Friday: 5,
                Saturday: -5,
                Sunday: -5
            };
            const discount = discounts[today];
            const ordersArray = Array.isArray(orders)
                ? orders
                : [orders];

            for (const order of ordersArray) {
                if (!order) continue;
                order.discount = discount;
                order.discountAmount = Number(order.totalAmount) * discount / 100 ;
            }

        });

        return super.init();
    }
};
