from django.http import HttpRequest, HttpResponse

# local
from .template import HelloWorld


def hello_world(request: HttpRequest) -> HttpResponse:
    return HelloWorld(name='james').render(request)
