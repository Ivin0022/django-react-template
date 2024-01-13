from django.urls import path

from .views import hello_world

app_name = 'core'

urlpatterns = [
    path('', hello_world, name='hello-world'),
]
