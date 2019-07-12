from django.test import TestCase
from .models import Movie
# Create your tests here.


class MovieModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Movie.objects.create(name="First Movie", price=0)
        Movie.objects.create(url="a url here", price=0)

    def test_name_content(self):
        print("Test Title Content")
        movie = Movie.objects.get(id=1)
        expected_object_name = movie.name
        self.assertEquals(expected_object_name, 'First Movie')

    def test_url_content(self):
        print("Test URL Content")
        movie = Movie.objects.get(id=2)
        expected_object_url = movie.url
        self.assertEquals(expected_object_url, 'a url here')
