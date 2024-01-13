from django.contrib import admin

from .models import Product, Category, Cart, CartItem


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    '''Admin View for Product'''


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    '''Admin View for Product'''


class CartItemInline(admin.TabularInline):
    '''Tabular Inline View for CartItem'''

    model = CartItem
    max_num = 20
    extra = 0
    readonly_fields = ['product']

    show_change_link = True


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    '''Admin View for Product'''
    inlines = [CartItemInline]


@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    '''Admin View for Product'''
    list_display = (
        'cart',
        'product',
    )
