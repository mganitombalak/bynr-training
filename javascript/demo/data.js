var products = [
    {
        title: "Product-1",
        tax: 0.18,
        pp: 7.66,
        rawPrice: 9.99
    },
    {
        title: "Product-2",
        tax: 0.08,
        pp: 12.03,
        rawPrice: 18.75
    },
    {
        title: "Product-3",
        tax: 0.18,
        pp: 28.13,
        rawPrice: 49.9
    },
    {
        title: "Product-4",
        tax: 0.01,
        pp: 1.43,
        rawPrice: 5
    },
    {
        title: "Product-5",
        tax: 0.18,
        pp: 167.95,
        rawPrice: 287.66
    }
]

var calculateRevenue = function () { console.log(`${this.title} ${this.rawPrice * (1 + this.tax) - this.pp}`); }
products.forEach(p => calculateRevenue.call(p));
console.log('=========================================');
var calculateRevenue2 = (p) => console.log(`${p.title} ${p.rawPrice * (1 + p.tax) - p.pp}`);
products.forEach(calculateRevenue2);
console.log('=========================================');
var generateRevenue = function () { 
    this['revenue'] = this.rawPrice * (1 + this.tax) - this.pp;
    delete this['tax'];
    delete this['pp'];
    delete this['rawPrice'];
 }
products.forEach(p => generateRevenue.call(p));
products.forEach(console.dir)