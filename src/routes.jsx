import { Home, Profile, SignUp, Listing, SocialMedia } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  WifiIcon,
  DocumentTextIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
import { AnnouncementForm } from '@/widgets/form'
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
    element: <Listing />,
  },
  {
    icon: NewspaperIcon,
    name: "Feeds",
    path: "/feeds",
    element: <SignUp />,
  },
  {
    icon: WifiIcon,
    name: "Social Media",
    path: "/social",
    element: <SocialMedia />,
  },

];

export default routes;
