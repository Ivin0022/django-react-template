from typing import TypedDict

from django.http import HttpRequest

from .models import CartItem


class ProductContext(TypedDict):
    cart_count: int


def django_version(request: HttpRequest) -> ProductContext:
    if request.user.is_anonymous:
        return {}

    cart_count = CartItem.objects.filter(cart__user=request.user).count()

    return {
        "cart_count": cart_count,
    }
