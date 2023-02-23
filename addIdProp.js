// given an array of objects, write a function that returns a new array with the same objects, but with an additional "id" property, 
// which corresponds to the index of the object in the array. The "id" property must be added immutably, without changing the original array.

const products = [
    { name: 'Product A', price: 10.00 },
    { name: 'Product B', price: 20.00 },
    { name: 'Product C', price: 15.00 },
    { name: 'Product D', price: 25.00 },
    { name: 'Product E', price: 5.00 },
];

const addIdProp = (data) => {
    const formattedData = data.map((obj, key = 1) => ({...obj, id: key === 0 ? 1 : key + 1}));
    return formattedData;
};

console.log(addIdProp(products));