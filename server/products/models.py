from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class CartItem(models.Model):
    """Model definition for CartItem."""

    cart = models.ForeignKey('Cart', on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey('Product', on_delete=models.CASCADE)

    class Meta:
        """Meta definition for CartItem."""

        verbose_name = 'CartItem'
        verbose_name_plural = 'CartItems'

    def __str__(self):
        """Unicode representation of CartItem."""
        return f'<{self.cart}> {self.product}'


class Cart(models.Model):
    """Model definition for Cart."""

    user = models.OneToOneField(User, on_delete=models.CASCADE)

    class Meta:
        """Meta definition for Cart."""

        verbose_name = 'Cart'
        verbose_name_plural = 'Carts'

    def __str__(self):
        """Unicode representation of Cart."""
        return f'{self.user}'


class Category(models.Model):
    """Model definition for Category."""

    name = models.CharField(max_length=50)

    class Meta:
        """Meta definition for Category."""

        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        """Unicode representation of Category."""
        return f'{self.name}'


class Product(models.Model):
    """Model definition for Product."""

    name = models.CharField("Product Name", max_length=250)
    SKU = models.CharField("Stock Keeping Unit", max_length=100)
    description = models.TextField()
    price = models.IntegerField(default=1, help_text="add price in paisa")
    image: str = models.ImageField(upload_to='product/images', blank=True)
    category = models.ForeignKey(
        'Category',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    class Meta:
        """Meta definition for Product."""

        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        """Unicode representation of Product."""
        return f'{self.name}'
