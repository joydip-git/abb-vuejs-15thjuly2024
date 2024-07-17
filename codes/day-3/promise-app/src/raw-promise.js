const divide = (a, b) => {
    const p = new Promise(
        //executor function
        (resolveFn, rejectFn) => {
            const res = a / b;
            if (res === Infinity) {
                //throw new Error("divisor should not be zero")
                const error = new Error("divisor should not be zero")
                rejectFn(error)
                //rejectFn("divisor should not be zero");
            }

            // return res
            resolveFn(res)
        }
    );
    return p;
}

const add = (a, b) => (a + b);

const divPromise = divide(12, 0)
divPromise
    .then(
        //callback will be called when Promise is resolved
        (data) => {
            console.log(data);
            //func().then(()=>{}, ()=>{})
        },
        //callback will be called when Promise is rejected
        (err) => { console.log(err.message); }
    )

const addRes = add(12, 3)
console.log(addRes);