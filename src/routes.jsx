import { Home, Profile, SignUp,Listing } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "Find People",
    path: "/people",
    element: <Profile />,
  },
  {
    icon: DocumentTextIcon,
    name: "Announcements",
    path: "/announcements",
    element: <Listing/>,
  },
  {
    icon: NewspaperIcon,
    name: "Feeds",
    path: "/feeds",
    element: <SignUp />,
  },

];

export default routes;
