import routes from "./routes.js";

async function launchController(controllerName) {
    const controller = await import(`./controller/${controllerName}.js`)
    controller.init();
}

function setAnchorEventListener() {
    const anchors = document.querySelectorAll('a');
    anchors.forEach(ele => {
        ele.addEventListener('click', e => {
            e.preventDefault();
            const href = ele.getAttribute('href');
            if (href.startsWith('mailto:')) {
                window.location.href = href; 
            } else {
                navigate(href);
            }
        });
    });
}

function setCurrentRoute(route) {
    routes.currentPath = route;
}

function navigate(path, firstLoad = false) {
    if (path === routes.currentPath.path) {
        return;
    }

    const routeKey = Object.keys(routes).find(key => routes[key].path === path)
    const route = routes[routeKey] || routes.home;

    setCurrentRoute(route);

    firstLoad
        ? history.replaceState(route, '', path)
        : history.pushState(route, '', path)

    launchController(route.controller)
}

function handlePopState({ state }) {
    const route = state || routes.home;

    setCurrentRoute(route);
    launchController(route.controller)
}

function init() {
    const path = window.location.pathname;

    navigate(path, true);
    setAnchorEventListener();
    addEventListener('popstate', handlePopState)
}

export default { init }