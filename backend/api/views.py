from rest_framework import generics

from .models import Movie
from .serializers import MovieSerializer


class ListMovie(generics.ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer


class DetailMovie(generics.RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
