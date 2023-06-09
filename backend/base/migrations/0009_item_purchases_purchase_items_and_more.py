# Generated by Django 4.1.7 on 2023-03-21 16:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_alter_purchaseitem_item'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='purchases',
            field=models.ManyToManyField(through='base.PurchaseItem', to='base.purchase'),
        ),
        migrations.AddField(
            model_name='purchase',
            name='items',
            field=models.ManyToManyField(through='base.PurchaseItem', to='base.item'),
        ),
        migrations.AlterField(
            model_name='purchaseitem',
            name='item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.item'),
        ),
    ]
