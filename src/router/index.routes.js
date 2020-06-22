export default class Router {
    constructor(route) {
        this.route = route;
    }

    getRoute() {
        switch (this.route) {
            case "#/":
                return console.log("home");
            case "#/about":
                return console.log("about");
            case "#/contact":
                return console.log("contact");
            default:
                console.log("404");
        }
    }
}
