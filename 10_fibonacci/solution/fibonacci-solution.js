const fibonacci = function(n) {
    if (n <= 0) {
        return "OOPS";
    } else if (n === 1) {
        return 1;
    }

    const sequence = [0, 1];

    for (let i = 2; i <= n; i++) {
        const nextFibonacci = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextFibonacci);
    }

    return sequence[n];
};

// Do not edit below this line
module.exports = fibonacci;
