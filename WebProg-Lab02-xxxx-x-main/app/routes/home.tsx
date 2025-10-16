import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lab02: 1007-3" },
    { name: "description", content: "Welcome to React Lab02 1007-3!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
