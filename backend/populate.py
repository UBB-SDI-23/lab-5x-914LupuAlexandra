from faker import Faker
import os
import random
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'utils.settings')

django.setup()
from base.models import Product, User, Basket, ProductBasket
fake = Faker()
fake2 = Faker('en_PH')

sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']
clothes = ['Briefs', 'Corset', 'Scarf', 'Gown', 'Cardigan', 'Sweatshirt', 'Pajamas', 'Thong', 'Shorts', 'Overalls', 'Jogging Suit', 'Socks', 
            'Bra', 'Shirt', 'Waistcoat', 'Knickers', 'Tights', 'Suit', 'Sarong', 'Jeans', 'Lingerie', 'Cummerbund', 'Blazer', 'Hat', 'Top', 'Blouse', 
            'Swimwear', 'Shoes', 'T-Shirt', 'Dress', 'Underwear', 'Cufflinks', 'Bow Tie', 'Swimming Shorts', 'Camisole', 'Slippers', 'Boxers', 'Dinner Jacket', 
            'Cravat', 'Poncho', 'Tankini', 'Belt', 'Stockings', 'Gloves', 'Hoody', 'Tie', 'Shawl', 'Cargos', 'Robe', 'Nightgown', 'Sandals', 'Polo Shirt']

for i in range(2):
    
    values = []
    for j in range(2):
        type = random.choice(clothes)[:20]
        title = fake2.random_company_adjective()[:20] + " " + type
        color = fake.color_name()
        price = fake.random_int(min=1, max=2000)
        size =random.choice(sizes)
        description = fake.text()
        description = description.replace("'", "''")

        Product.objects.create(title=title, type=type, color=color, price=price, size=size, description=description)
    if ((i + 1) % 2 == 0):
        print('Generated ' + str((i + 1) * 2) + ' records')


for i in range(2):
    
    values = []
    for j in range(2):
        first_name = fake.name()[:50]
        last_name = fake.name()[:50]
        address = fake.address()
        phone_number = fake.phone_number()
        email = fake.email()

        User.objects.create(first_name=first_name, last_name=last_name, address=address, phone_number=phone_number, email=email)
    if ((i + 1) % 2 == 0):
        print('Generated ' + str((i + 1) * 2) + ' records')

for i in range(2):
    
    values = []
    for j in range(2):
        discount_code = '#' + fake.word()
        date = fake.date()
        user = fake.random_int(min=1, max=14)
        user=User(id=user)

        Basket.objects.create(discount_code=discount_code, date=date, user=user)
    if ((i + 1) % 2 == 0):
        print('Generated ' + str((i + 1) * 2) + ' records')

for i in range(2):
    
    values = []
    for j in range(2):
        number_products = fake.random_int(min=1, max=20)
        basket_id = fake.random_int(min=1, max=10)
        product_id = fake.random_int(min=1, max=14)
        basket=Basket(id=basket_id)
        product=Product(id=product_id)

        ProductBasket.objects.create(number_products=number_products, basket=basket, product=product)
    if ((i + 1) % 2 == 0):
        print('Generated ' + str((i + 1) * 2) + ' records')