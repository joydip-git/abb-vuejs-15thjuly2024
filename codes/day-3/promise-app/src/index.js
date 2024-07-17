const divide = async (a, b) => {
    const res = a / b;
    if (res === Infinity) {
        //rejecting the promise
        throw new Error("divisor should not be zero")
    }
    return res
    //console.log(res);
}

const add = (a, b) => (a + b);

/*
const divPromise = divide(12, 2)
divPromise
    // .then(
    //     //callback will be called when Promise is resolved
    //     // (data) => {
    //     //     console.log(data);
    //     //     //func().then(()=>{}, ()=>{})
    //     // },
    //     //callback will be called when Promise is rejected
    //     (err) => { console.log(err.message); }
    // )
    .catch(
        (err) => { console.log(err.message); }
    )
*/

async function callDivide() {
    try {
        const data = await divide(12, 3)
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
callDivide();

const addRes = add(12, 3)
console.log(addRes);