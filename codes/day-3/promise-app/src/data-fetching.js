const { default: axios } = require("axios");

const url = "https://jsonplaceholder.typicode.com/todos";

/*
const getTodos = () => {
    fetch(url)
        .then(
            (resp) => {
                resp
                    .json()
                    .then(
                        (data) => { console.log(data.slice(0, 5)) },
                        (e) => console.log(e)
                    )
            },
            (err) => {
                console.log(err);
            }
        )
    // return fetch({
    //     method: 'GET',
    //     url: url,
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     }
    // })
}
    */
const getTodos = async () => {
    try {
        const resp = await fetch(url)
        const data = await resp.json()
        console.log(data.slice(0, 5));
    } catch (error) {
        console.log(error);
    }
}
//getTodos()
const getTodo = (id) => {
    axios.get(`${url}/${id}`)
        .then(
            (resp) => {
                console.log(resp.statusText);
                console.log(resp.status);
                console.log(resp.data);
            },
            (err) => {
                console.log(err);
            }
        )
}
getTodo(1)