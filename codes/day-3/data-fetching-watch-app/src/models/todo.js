export class Todo {
    userId;
    id;
    title;
    completed;

    constructor(userid, id, title, completed) {
        this.id = id;
        this.userId = userid;
        this.title = title;
        this.completed = completed;
    }
}