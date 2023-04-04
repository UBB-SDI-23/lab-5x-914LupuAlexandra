from django.urls import path
from . import views
from .views import FilterByPrice, ProductList


urlpatterns = [
    path('products/', views.ProductList.as_view()),
    path('products/<int:pk>/', views.ProductDetail.as_view()),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    path('baskets/', views.BasketList.as_view()),
    path('baskets/<int:pk>/', views.BasketDetail.as_view()),

    path('products/filter/<price>/', FilterByPrice.as_view()),

    path('productbasket/', views.ProductBasketList.as_view()),
    path('productbasket/<int:pk>/', views.ProductBasketDetail.as_view()),
    path('users/by-number-baskets/', views.UsersOrderedByNumberBaskets.as_view()),
    path('products/by-amount-baskets-have/', views.ProductsByAmountBasketsHave.as_view())


]