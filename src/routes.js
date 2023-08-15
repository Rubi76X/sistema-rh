 import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Fichaje from "views/examples/Fichaje.js";
import Vacaciones from "views/examples/Vacaciones.js";

var routes = [
  {
    path: "/fichaje",
    name: "Fichaje",
    icon: "fa fa-briefcase text-default",
    component: <Fichaje />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Ausencias y retardos",
    icon: "fa fa-user-times text-teal",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/vacaciones",
    name: "Vacaciones",
    icon: "ni ni-calendar-grid-58 text-primary",
    component: <Vacaciones />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Tareas",
    icon: "fa fa-book text-orange",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Equipo",
    icon: "fas fa-users text-green",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/index",
    name: "Estadisticas",
    icon: "ni ni-chart-bar-32 text-red",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Perfil",
    icon: "fa fa-user-circle text-purple text-lg",
    component: <Profile />,
    layout: "/admin",
  },
];
export default routes;
