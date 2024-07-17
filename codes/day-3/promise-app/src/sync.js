const divide = (a, b) => {
    const res = a / b;
    if (res === Infinity)
        throw new Error("divisor should not be zero")

    return res
}

const add = (a, b) => (a + b);

const divRes = divide(12, 3)
console.log(divRes);

const addRes = add(12, 3)
console.log(addRes);