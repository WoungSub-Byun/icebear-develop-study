from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField('TITLE', max_length=50)
    content = models.TextField('CONTENTS')
    name = models.ForeignKey("User", on_delete=models.CASCADE)
    createdAt = models.DateField('CREATEDAT', auto_now_add=True)
    updatedAt = models.DateField('UPDATEDAT', auto_now=True)

    class Meta:
        ordering = ['createdAt',]

    def __str__(self):
        return self.title
    

class User(models.Model):
    name = models.CharField('NAME', max_length=20)
    id = models.CharField('ID', max_length=30, primary_key=True)
    password = models.CharField('PASSWORD', max_length=100)

    class Meta:
        ordering = ['id',]
        
    def __str__(self):
        return self.id
    
     