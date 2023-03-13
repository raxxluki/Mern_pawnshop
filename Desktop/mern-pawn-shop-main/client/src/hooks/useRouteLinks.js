import {matchRoutes, useLocation} from "react-router-dom";
import routes, {routeLinks} from "../services/routes";

const useRouteLinks = () => {
    const location = useLocation();
    const [{route}] = matchRoutes(routes, location);

    return routeLinks[route.path] || [];
}

export default useRouteLinks;