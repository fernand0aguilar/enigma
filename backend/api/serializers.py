from rest_framework import serializers
from .models import Movie


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "name",
            "plot",
            "year",
            "director",
            "actors",
            "image",
            "ratings",
            "url"
        )
        model = Movie
