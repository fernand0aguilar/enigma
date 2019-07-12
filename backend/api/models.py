from django.db import models
from django.http import JsonResponse


class Movie(models.Model):
    name = models.CharField(max_length=300)
    plot = models.TextField()
    year = models.CharField(max_length=30)
    director = models.CharField(max_length=300)
    actors = models.CharField(max_length=3000)
    image = models.ImageField()
    ratings = models.CharField(max_length=30)
    url = models.URLField()

    def __str__(self):
        """A string representation of the model."""
        return JsonResponse(self)
