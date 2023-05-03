from django.db.models import OuterRef, Avg, Sum, Count
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics, status
from base.models import Product, User, Basket, ProductBasket
from .serializers import ProductSerializer, UserSerializer, BasketSerializer, UserSerializerByID, BasketSerializerByID, \
    ProductBasketSerializer, UsersOrderedByNumberBasketsSerializer, ProductsByAmountBasketsHaveSerializer


class FilterByPrice(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        price = self.kwargs['price']
        return Product.objects.filter(price__gt=price)


class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()[:100]
    serializer_class = ProductSerializer


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()[:100]
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializerByID


class BasketList(generics.ListCreateAPIView):
    queryset = Basket.objects.all().[:100]
    serializer_class = BasketSerializer


class BasketDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Basket.objects.all()
    serializer_class = BasketSerializerByID


class ProductBasketList(generics.ListCreateAPIView):
    queryset = ProductBasket.objects.all().[:100]
    serializer_class = ProductBasketSerializer


class ProductBasketDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProductBasket.objects.all()
    serializer_class = ProductBasketSerializer


class UsersOrderedByNumberBaskets(generics.ListAPIView):
    serializer_class = UsersOrderedByNumberBasketsSerializer

    def get_queryset(self):
        query = User.objects.annotate(number_baskets=Count('baskets')).order_by('number_baskets').reverse()
        return query


class ProductsByAmountBasketsHave(generics.ListAPIView):
    serializer_class = ProductsByAmountBasketsHaveSerializer

    def get_queryset(self):
        products = Product.objects.annotate(total_products=Sum('productbasket__number_products')).order_by('-total_products')
        return products


