const products = [
    {id: 1, name: 'xiaomi phone one night', price: 10000, },
    {id: 2, name: 'iphone', price: 10000, },
    {id: 3, name: 'mac book air', price: 10000, },
    {id: 4, name: 'lenovo yoga laptop 2025', price: 10000, },
    {id: 5, name: 'dell inspiron laptop', price: 10000, },
    {id: 6, name: 'samsung phone note 7S', price: 10000, },
    {id: 7, name: 'nokia old age phone gone', price: 10000, },
    {id: 8, name: 'phone of the', price: 10000, }
];

// for (const product of products){
//     console.log (product);
// }


function matchedProducts (products, search){
    const matched = [];
    for (const product of products){
        if(product.name.includes(search)){
            matched.push(product)
        }
    }
    return matched
}

const result = matchedProducts (products, 'phone');
console.log (result)