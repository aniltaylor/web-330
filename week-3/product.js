<script> 
export class Product
{
constructor(name, price)
{
this.name = name;
this.price = price;
}
}

import{ Product } from "./product.js";
export class Beverage extends Product{
constructor(name, price)
{
super(name, price);
}
}
</script>
