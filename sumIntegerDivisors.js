const sumIntegerDivisors = (number = 0) => {
    if(!Number.isInteger(number) || number < 0) return console.error('Invalid input: the number must be a positive integer');

    const dividers = [];

    for(let i = 1; i <= number / 2; i++) {
        if(number % i === 0) dividers.push(i);
    }

    const dividersSum = dividers.reduce((current, next) => current + next, 0);
    return dividersSum;
};


console.log(sumIntegerDivisors(10));