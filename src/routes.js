import React from "react";

import { Icon } from "@chakra-ui/react";
import { MdHome, MdOutlineLibraryAdd } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { BsCardList } from "react-icons/bs";

// Admin Imports
import MainDashboard from "views/admin/default";
import Add from "layouts/admin/add.js";

const routes = [
  {
    name: "Programs List",
    layout: "/",
    path: "/home",
    icon: <Icon as={BsCardList} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Add a Event",
    layout: "/",
    path: "/add",
    icon: (
      <Icon
        as={MdOutlineLibraryAdd}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: Add,
  },
  {
    name: "Shiachannel Home",
    layout: "/",
    path: "https://shiachannel.in",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
    isExternal: true,
  },
  {
    name: "Live TV",
    layout: "/",
    path: "https://shiachannel.in/livetv",
    icon: <Icon as={CgScreen} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
    isExternal: true,
  },
];

export default routes;
