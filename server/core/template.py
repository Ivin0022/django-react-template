from typing import NamedTuple
from reactivated import template


@template
class HelloWorld(NamedTuple):
    name: str
