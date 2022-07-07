export class ShoppingCart {
    constructor(){
        this.product = [];
    }
    count(){
        return this.product.length;
    }
    
    add(prdObj){
        
        this.product.push(prdObj);
        
        }
        *[Symbol.iterator](){
            yield* this.product;
        }
}

