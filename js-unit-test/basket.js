const basketModel = {
    items: [],
    add: p => this.items.unshift(p),
    remove: id => {
        if (this.items.length > 0) {
            this.items = items.filter(x => x.id != id);
            return;
        } 
        throw 'Basket does not contain any item';
    },
    getBasketCount: () => items.reduce(a, b => a.qty + b.qty)
}

// Sepete ayni urunden bir tane eklenmeli 
// urun varsa adeti guncellenmeli