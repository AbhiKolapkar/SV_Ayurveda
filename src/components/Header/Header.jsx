import React from "react";
import { Box, Container, Toolbar, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "/SV_Logo.svg";
import { BookingBtn } from "../../common/BookingBtn";
import { DesktopMenu, MobileMenu, TabMenu } from "./Menus";
import styles from "./style.module.css";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width:" + 1240 + "px)");
  const isMobile = useMediaQuery("(max-width:" + 900 + "px)");

  return (
    <>
      <header className={styles.header}>
        <Container maxWidth="xl">
          <Toolbar disableGutters className={styles.toolbar}>
            {/* header-logo */}
            <Box>
              <NavLink to="/">
                <img
                  data-src={logo}
                  alt="logo"
                  width={225}
                  className="lazyload"
                />
              </NavLink>
            </Box>

            {/* header navigation-menu */}
            {isDesktop ? (
              <DesktopMenu />
            ) : isMobile ? (
              <MobileMenu />
            ) : (
              <TabMenu />
            )}

            {/* header-button */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <BookingBtn />
            </Box>
          </Toolbar>
        </Container>
      </header>
    </>
  );
};

export default Header;
