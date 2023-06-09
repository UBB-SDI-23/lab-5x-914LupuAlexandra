# Generated by Django 4.1.7 on 2023-03-07 19:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Shop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('type', models.CharField(max_length=20)),
                ('description', models.CharField(blank=True, max_length=200)),
                ('color', models.CharField(max_length=20)),
                ('size', models.CharField(max_length=5)),
                ('price', models.IntegerField()),
                ('gender', models.CharField(max_length=2)),
            ],
        ),
    ]
