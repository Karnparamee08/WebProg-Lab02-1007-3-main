import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
        index("routes/home.tsx"),
        route("app/petlist", "./frontend/PetList.tsx"),
        route("app/petview/:petId", "./frontend/PetView.tsx"),
        route("app/petform", "./frontend/InsertForm.tsx"),
] satisfies RouteConfig;
