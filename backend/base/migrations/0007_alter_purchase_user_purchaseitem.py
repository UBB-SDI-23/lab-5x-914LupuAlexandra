# Generated by Django 4.1.7 on 2023-03-21 15:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_alter_purchase_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='purchase',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='purchases', to='base.user'),
        ),
        migrations.CreateModel(
            name='PurchaseItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('noItems', models.IntegerField()),
                ('price', models.IntegerField()),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.item')),
                ('purchase', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.purchase')),
            ],
        ),
    ]