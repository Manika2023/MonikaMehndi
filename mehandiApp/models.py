from django.db import models

# Create your models here.

class Contact(models.Model):
     name=models.CharField(max_length=50)
     phone_no=models.BigIntegerField(default='')
     email=models.EmailField()
     desc=models.TextField(max_length=300)

     