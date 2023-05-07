from django.db import models
from rest_framework.exceptions import ValidationError


class Product(models.Model):
    title = models.CharField(max_length=50)
    type = models.CharField(max_length=20)
    color = models.CharField(max_length=20)
    size = models.CharField(max_length=5)
    price = models.IntegerField(default=0)
    description = models.CharField(max_length=500, default="")
    baskets = models.ManyToManyField('base.Basket', through='base.ProductBasket')

    def __str__(self):
        return self.title



class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=100, default="-empty-")
    phone_number = models.CharField(max_length=20)
    email = models.CharField(max_length=50)

    def __str__(self):
        return self.first_name + " " + self.last_name


class Basket(models.Model):
    number_products = models.IntegerField(default=0)
    price = models.IntegerField(default=0)
    discount_code = models.CharField(max_length=25, default="-no discount-")
    user = models.ForeignKey(User, related_name='baskets', on_delete=models.CASCADE)
    date = models.DateField()
    products = models.ManyToManyField(Product, through='base.ProductBasket')

    def __str__(self):
        return self.id.__str__()


    def get_total_price(self):
        total = 0
        products = ProductBasket.objects.all().filter(basket=self)
        for product in products:
            total += product.product.price * product.number_products
        return total

    def get_no_products(self):
        total = 0
        products = ProductBasket.objects.all().filter(basket=self)
        for product in products:
            total += product.number_products
        return total


class ProductBasket(models.Model):
    product = models.ForeignKey('base.Product', on_delete=models.CASCADE)
    basket = models.ForeignKey('base.Basket', on_delete=models.CASCADE)
    number_products = models.IntegerField(default=0)
    price = models.IntegerField(default=0)

    def __str__(self):
        return self.product.title + " " + self.basket.date.__str__()

    def get_price(self):
        return self.product.price * self.number_products



