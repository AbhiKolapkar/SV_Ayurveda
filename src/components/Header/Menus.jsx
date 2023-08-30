import React, { useState } from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { BookingBtn } from "../../common/BookingBtn";
import DropDown from "./DropDown";
import { SVG_Menu } from "../../common/SVG_Icons";
import { NavLinks_Data, NavRoutes_Data } from "../../data/constant";
import styles from './style.module.css'

export const DesktopMenu = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", lg: "flex" }, gap: "1.875rem" }}>
        {NavLinks_Data.map(({ path, title }) => (
          <Typography key={title} variant="button" color="text.secondary">
            <NavLink
              to={path}
              className={(navClass) =>
                navClass.isActive
                  ? `${styles.menuItem} ${styles.active}`
                  : `${styles.menuItem}`
              }
            >
              {title}
            </NavLink>
          </Typography>
        ))}
      </Box>
    </>
  );
};

export const TabMenu = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: 3,
        }}
      >
        {NavRoutes_Data.map((route) => {
          if (route.insightsData) {
            return <DropDown route={route} key={route.title} />;
          }
          return (
            <Typography
              variant="button"
              color="text.secondary"
              key={route.title}
            >
              <NavLink
                to={route.path}
                className={(navClass) =>
                  navClass.isActive
                    ? `${styles.menuItem} ${styles.active}`
                    : `${styles.menuItem}`
                }
              >
                {route.title}
              </NavLink>
            </Typography>
          );
        })}
      </Box>
    </>
  );
};

export const MobileMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const open = Boolean(anchorElNav);

  const handleOpenDropDown = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseDropDown = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          flexGrow: 1,
          justifyContent: "flex-end",
        }}
      >
        <IconButton
          id="menu-btn"
          size="large"
          aria-controls={open ? "nav-links" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleOpenDropDown}
          sx={{ mr: { xs: 0, sm: 2 } }}
        >
          <SVG_Menu />
        </IconButton>

        <Menu
          id="nav-links"
          anchorEl={anchorElNav}
          open={open}
          onClose={handleCloseDropDown}
          MenuListProps={{
            "aria-labelledby": "menu-btn",
            onMouseLeave: handleCloseDropDown,
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          sx={{ minWidth: "100%", display: { xs: "block", lg: "none" } }}
        >
          {NavLinks_Data.map(({ path, title }) => (
            <MenuItem key={title} onClick={handleCloseDropDown}>
              <Typography variant="button" color="text.secondary">
                <NavLink
                  to={path}
                  className={(navClass) =>
                    navClass.isActive
                      ? `${styles.menuItem} ${styles.active}`
                      : `${styles.menuItem}`
                  }
                >
                  {title}
                </NavLink>
              </Typography>
            </MenuItem>
          ))}

          <Box sx={{ display: { xs: "block", sm: "none" }, mt: 1 }}>
            <BookingBtn />
          </Box>
        </Menu>
      </Box>
    </>
  );
};
