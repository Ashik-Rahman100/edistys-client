import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  // {
  //   id: 1,
  //   title: "Home",
  //   path: "/",
  //   newTab: false,
  // },
  // {
  //   id: 2,
  //   title: "About",
  //   path: "/about",
  //   newTab: false,
  // },
  // {
  //   id: 3,
  //   title: "Pricing",
  //   path: "/pricing",
  //   newTab: false,
  // },
  // {
  //   id: 5,
  //   title: "Contact",
  //   path: "/contact",
  //   newTab: false,
  // },
  // {
  //   id: 5,
  //   title: "Blog",
  //   path: "/blogs",
  //   newTab: false,
  // },
  {
    id: 6,
    title: "Solutions",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Any Caas",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "Any Baas",
        path: "/pricing",
        newTab: false,
      },
      {
        id: 63,
        title: "Any Paas",
        path: "/contact",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Services",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 5,
    title: "About Us",
    path: "/blogs",
    newTab: false,
  },
];
export default menuData;
