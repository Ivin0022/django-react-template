from typing import NamedTuple

from reactivated import interface, Pick

from .models import Cart


@interface
class CartDetail(NamedTuple):
    cart: Pick[
        Cart,
        "user_id",
        "items.product.pk",
        "items.product.name",
    ]
