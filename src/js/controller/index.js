import "../../css/main.css";
import Router from "../../router/index.routes";

// Listening for hash change
window.addEventListener("hashchange", () => {
    const route = window.location.hash;
    const router = new Router(route);

    router.getRoute();
});
