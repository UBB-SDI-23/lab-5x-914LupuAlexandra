import datetime
import json
from rest_framework.test import APITestCase

from base.models import User, Basket, Product, ProductBasket


class UsersOrderedByNumberBasketsTestCase(APITestCase):
    @classmethod
    def setUpTestData(cls):
        User.objects.bulk_create([User(first_name='a', last_name='a', address='a', phone_number='a', email='a'),
                                  User(first_name='b', last_name='b', address='b', phone_number='b', email='b')
                                  ])

        Basket.objects.bulk_create([Basket(discount_code='a', date=datetime.date.today(), user_id=1),
                                    Basket(discount_code='b', date=datetime.date.today(), user_id=1)

                                    ])

    def test_url_exists(self):
        response = self.client.get("/users/by-number-baskets/")
        self.assertEqual(response.status_code, 200)

    def test_users_ordered_by_number_baskets(self):
        response = self.client.get('/users/by-number-baskets/')
        expected_json = [
            {'id': 1, 'first_name': 'a', 'last_name': 'a', 'address': 'a', 'phone_number': 'a', 'email': 'a',
             'number_baskets': 2},
            {'id': 2, 'first_name': 'b', 'last_name': 'b', 'address': 'b', 'phone_number': 'b', 'email': 'b',
             'number_baskets': 0}
        ]

        self.assertEqual(json.loads(response.content), expected_json)


class ProductsByAmountBasketsHaveTestCase(APITestCase):
    @classmethod
    def setUpTestData(cls):
        Product.objects.bulk_create([Product(title='a', type='a', color='a', size='a', price=100),
                                     Product(title='b', type='b', color='b', size='b', price=20)
                                     ])
        User.objects.create(first_name='a', last_name='a', address='a', phone_number='a', email='a')

        Basket.objects.create(discount_code='a', date=datetime.date.today(), user_id=1)

        ProductBasket.objects.bulk_create([ProductBasket(number_products=3, basket_id=1, product_id=1),
                                           ProductBasket(number_products=2, basket_id=1, product_id=2)])

    def test_url_exists(self):
        response = self.client.get("/products/by-amount-baskets-have/")
        self.assertEqual(response.status_code, 200)

    def test_users_ordered_by_number_baskets(self):
        response = self.client.get('/products/by-amount-baskets-have/')
        response.render()
        expected_json = [
            {'id': 1, 'title': 'a', 'type': 'a', 'color': 'a', 'size': 'a', 'price': 100, 'total_products': 3},
            {'id': 2, 'title': 'b', 'type': 'b', 'color': 'b', 'size': 'b', 'price': 20, 'total_products': 2}
        ]

        self.assertEqual(json.loads(response.content), expected_json)
