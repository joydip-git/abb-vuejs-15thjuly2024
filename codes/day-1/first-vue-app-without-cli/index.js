//1st Vue App
const rootApp = Vue.createApp({
    data: function () {
        return {
            //message: "Welcome to Vue JS",
            name: "",
            greetingStyle: "Welcome",
            counter: 0
        }
    },
    methods: {
        // updateMessage(e) {
        //     //console.log(e.target.value);
        //     this.message = e.target.value
        // },
        changeGreeting() {
            if (this.greetingStyle === "Welcome") {
                this.greetingStyle = "Hola"
            } else if (this.greetingStyle === "Hola") {
                this.greetingStyle = "Welcome"
            } else {
                this.greetingStyle = ""
            }
        },
        updateMessage(value) {
            this.message = value
        },
        changeMessage() {
            this.message = "Welcome to Vue data and event binding"
        },
        increaseCounter: function () {
            this.counter += 1
        }
    },
    computed: {
        //message(){ return somethimg } 
        message: function () {
            console.log("new message produced");
            return this.greetingStyle + " " + this.name
        }
    }
})
rootApp.mount("#root")

//2nd Vue App
const otherApp = Vue.createApp({
    data() {
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