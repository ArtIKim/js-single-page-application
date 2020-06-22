import "../../css/main.css";
import Router from "../../router/index.routes";

// Listening for hash change
window.addEventListener("hashchange", () => {
    const rout = window.location.hash;
    const router = new Router(rout);

    router.getRoute();
});
