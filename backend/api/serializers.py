from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from rest_framework.validators import UniqueTogetherValidator

from base.models import Product, User, Basket, ProductBasket


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('__all__')

    def validate_price(self, value):
        if value <= 0:
            raise ValidationError("The price must be positive")
        return value

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class BasketSerializer(serializers.ModelSerializer):
    number_products = serializers.IntegerField(source='get_no_products', read_only=True)
    price = serializers.IntegerField(source='get_total_price', read_only=True)

    def validate_user_id(self, value):
        filter = User.objects.filter(id=value)
        if not filter.exists():
            raise serializers.ValidationError("User does not exist")
        return value

    class Meta:
        model = Basket
        fields = ('id', 'price', 'number_products', 'user', 'products', 'date', 'discount_code')


class UserSerializerByID(serializers.ModelSerializer):
    baskets = BasketSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'phone_number', 'email', 'baskets')


class BasketSerializerByID(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    price = serializers.IntegerField(source='get_total_price', read_only=True)
    number_products = serializers.IntegerField(source='get_no_products', read_only=True)

    class Meta:
        model = Basket
        fields = ('id', 'price', 'discount_code', 'number_products', 'date', 'user', 'products')


class ProductBasketSerializer(serializers.ModelSerializer):
    total_price = serializers.IntegerField(source='get_price', read_only=True)

    def validate_product_id(self, value):
        filter = Product.objects.filter(id=value)
        if not filter.exists():
            raise serializers.ValidationError("Product does not exist")
        return value

    def validate_basket_id(self, value):
        filter = Basket.objects.filter(id=value)
        if not filter.exists():
            raise serializers.ValidationError("Basket does not exist")
        return value

    def validate_number_products(self, value):
        if value <= 0:
            raise ValidationError("The number of products must be positive!")
        return value

    class Meta:
        model = ProductBasket
        fields = ('id', 'number_products', 'total_price', 'product', 'basket')
        validators = [
            UniqueTogetherValidator(
                queryset=ProductBasket.objects.all(),
                fields=['product', 'basket']
            )]


class UsersOrderedByNumberBasketsSerializer(serializers.ModelSerializer):
    number_baskets = serializers.IntegerField(read_only=True)
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'address', 'phone_number', 'email', 'number_baskets')

class ProductsByAmountBasketsHaveSerializer(serializers.ModelSerializer):
    total_products = serializers.IntegerField(read_only=True)
    class Meta:
        model = Product
        fields = ('id', 'title', 'type', 'color', 'size', 'price', 'total_products')

