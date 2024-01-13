from django.http import HttpRequest, HttpResponse
from django.shortcuts import get_object_or_404, render

# local
from .templates import ProductList
from .models import Product, Cart
from .interfaces import CartDetail


def products_view(request: HttpRequest) -> HttpResponse:

    return ProductList(products=Product.objects.all(), name="ivin").render(request)


def add_to_cart(request: HttpRequest, pk: int) -> HttpResponse:
    product = get_object_or_404(Product, pk=pk)
    cart, _ = Cart.objects.get_or_create(user=request.user)
    cart.items.create(product=product)
    return CartDetail(cart=cart).render(request)
