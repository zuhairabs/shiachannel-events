// Chakra imports
import { Portal, Box, useDisclosure } from "@chakra-ui/react";
import Footer from "components/footer/FooterAdmin.js";
// Layout components
import Navbar from "components/navbar/NavbarAdmin.js";
import Sidebar from "components/sidebar/Sidebar.js";
import { SidebarContext } from "contexts/SidebarContext";
import React, { useEffect, useState } from "react";
import routes from "routes.js";
import { getCount } from "util/funs.js";
import UserReports from "views/admin/default";
import useGoogleSheets from "../../hooks/useGoogleSheet.js";

const REACT_APP_GOOGLE_API_KEY = "AIzaSyA32ohOnDkx67VeyorHKWxuHOc1ItPxFRM";
const REACT_APP_GOOGLE_SHEETS_ID =
  "17ueaD--8XmVBG8hy6ZFKKrYFz-q3duVD_ro8dHCsPBw";

const sheetsOptions = [{ id: "Sheet1", headerRowIndex: 0 }];

// Custom Chakra theme
export default function Dashboard(props) {
  const [stats, setStats] = useState({
    majalis: 0,
    khamsa: 0,
    ashra: 0,
    juloos: 0,
    jashn: 0,
  });
  const { data, loading, error } = useGoogleSheets({
    apiKey: REACT_APP_GOOGLE_API_KEY,
    sheetId: REACT_APP_GOOGLE_SHEETS_ID,
    sheetsOptions,
  });

  useEffect(() => {
    const majlisRes = getCount(data?.[0]?.data, "Majlis");
    const ashraRes = getCount(data?.[0]?.data, "Ashra");
    const khamsaRes = getCount(data?.[0]?.data, "Khamsa");
    const juloosRes = getCount(data?.[0]?.data, "Juloos");
    const jashnRes = getCount(data?.[0]?.data, "Jashn");
    setStats({
      majlis: majlisRes,
      khamsa: khamsaRes,
      ashra: ashraRes,
      juloos: juloosRes,
      jashn: jashnRes,
    });
    console.log(data);
  }, [data]);

  const { ...rest } = props;
  // states and functions
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  // functions for changing the states from components
  // const getRoute = () => {
  //   return window.location.pathname !== "/admin/full-screen-maps";
  // };
  const getActiveRoute = (routes) => {
    let activeRoute = "Shiachannel";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].items);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].items);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveNavbar = getActiveNavbar(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].items);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].secondary;
        }
      }
    }
    return activeNavbar;
  };
  const getActiveNavbarText = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveNavbar = getActiveNavbarText(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbarText(routes[i].items);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].messageNavbar;
        }
      }
    }
    return activeNavbar;
  };

  document.documentElement.dir = "ltr";
  const { onOpen } = useDisclosure();
  return (
    <Box>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        <Sidebar routes={routes} display="none" {...rest} />
        <Box
          float="right"
          minHeight="100vh"
          height="100%"
          overflow="auto"
          position="relative"
          maxHeight="100%"
          w={{ base: "100%", xl: "calc( 100% - 290px )" }}
          maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          <Portal>
            <Box>
              <Navbar
                onOpen={onOpen}
                logoText={""}
                brandText={getActiveRoute(routes)}
                secondary={getActiveNavbar(routes)}
                message={getActiveNavbarText(routes)}
                fixed={fixed}
                {...rest}
              />
            </Box>
          </Portal>

          {/* {getRoute() ? ( */}
          <Box
            mx="auto"
            p={{ base: "20px", md: "30px" }}
            pe="20px"
            minH="100vh"
            pt="50px"
          >
            <UserReports data={data} stats={stats} />
          </Box>
          {/* ) : null} */}
          <Box>
            <Footer />
          </Box>
        </Box>
      </SidebarContext.Provider>
    </Box>
  );
}
