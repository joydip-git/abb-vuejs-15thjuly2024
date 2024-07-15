const anilObj = {
    name: 'anil',
    id: 1,
    salary: 1000
}
console.log(anilObj);
const printAnilValues = (target, propName) => {
    return target[propName]
}

const setAnilValues = function (target, propName, newValue) {
    target[propName] = newValue
}

const anilProxy = new Proxy(
    anilObj,
    {
        get: printAnilValues,
        set: setAnilValues
    }
)
anilProxy.salary = 2000
anilProxy.name = "anil kumar"

console.log(anilProxy);

export default {
    data() {
        return {
            name: 'anil',
            id: 1,
            salary: 1000
        }
    },
    methods: {
        changeSalary: () => {
            this.salary = 2000
        }
    }
}

const p = new Proxy({
    name: 'anil',
    id: 1,
    salary: 1000
}, {
    set: (target, propName, newValue) => {
        target[propName] = newValue
    }
})

