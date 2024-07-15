//1st Vue App
const rootApp = Vue.createApp({
    data: function () {
        return {
            message: "Welcome to Vue JS"
        }
    },
    methods: {
        changeMessage() {
            this.message = "Welcome to Vue data and event binding"
        }
    }
})
rootApp.mount("#root")

//2nd Vue App
const otherApp = Vue.createApp({
    data: function () {
        return {
            message: "this is anoter app"
        }
    }
})

otherApp.mount("#another")

//in JS, an object is collection of keys/properties and values
// const obj = {
//     name: "joydip",
//     id: 1,
//     salary: 1000,
//     print: function () {
//         return this.name + ' ' + this.id + ' ' + this.salary
//     }
// }
// console.log(obj.name);
// console.log(obj["salary"]);
// console.log(obj.print());