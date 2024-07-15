// const app = Vue.createApp({
//     data: function () { return {} },
//     methods: {},
//     computed: {},
// })

const WelcomeComp = {
    data: function () {
        return {
            name: "",
            greetingStyle: "Welcome"
        }
    },
    methods: {
        changeGreeting() {
            if (this.greetingStyle === "Welcome") {
                this.greetingStyle = "Hola"
            } else if (this.greetingStyle === "Hola") {
                this.greetingStyle = "Welcome"
            } else {
                this.greetingStyle = ""
            }
        }
    },
    computed: {
        message: function () {
            return this.greetingStyle + " " + this.name
        }
    },
    template: `
         <div>           
            <label for="txtName">Name: &nbsp;</label>
            <input type="text" id="txtName" v-model="name" />
            <br>
            <span>Message:&nbsp;{{message}}</span>
            <br>
            <button type="button" v-on:click="changeGreeting">Change Greeting Style </button>            
        </div>
    `
}

const CounterComp = {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increaseCounter: function () {
            this.counter += 1
        }
    },
    template: `
         <div>
            <span>Counter: &nbsp; {{counter}}</span>
            <br>
            <button type="button" v-on:click="increaseCounter">Increase</button>
        </div>
    `
}

const app = Vue.createApp({})
app.component(
    'counter-comp',
    CounterComp
)
//app.component('welcome-comp', WelcomeComp)


app.mount("#root")