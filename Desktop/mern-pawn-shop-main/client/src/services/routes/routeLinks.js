const homeLink = {
    url: "/",
    text: "Home",
    icon: ""
}

const defaultLinks = [
    homeLink
]

const routeLinks = [
    {
        path: "/",
        links: defaultLinks
    },
    {
        path: "/account/*",
        links: defaultLinks
    },
    {
        path: "*",
        links: defaultLinks
    }
]

export default routeLinks;