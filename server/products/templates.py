from typing import NamedTuple, List
from reactivated import Pick, template

from .models import Product


@template
class ProductList(NamedTuple):
    name: str
    products: List[
        Pick[
            Product,
            "pk",
            "name",
            "description",
            "image",
        ],
    ]
