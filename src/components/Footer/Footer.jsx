import React from 'react'
import { Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "/SV_Logo.svg";
import {
  Contacts_Data,
  ExtraLinks_Data,
  NavLinks_Data,
  SocialLinks_Data,
} from "../../data/constant";
import styles from './style.module.css'

const Footer = () => {
  const Current_Year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className={styles.fTop}>
          <Container maxWidth="xl">
            <div className={styles.grid_container}>
              <div className={styles.grid_item}>
                <img data-src={logo} alt="" width={225} className="lazyload" />

                <Typography variant="body2" color={"text.secondary"}>
                  Planning to create healthier world around us.
                </Typography>

                <ul className={styles.social_links}>
                  {SocialLinks_Data.map(({ id, platform, path }) => (
                    <li key={id}>
                      <a href={path}>
                        <img data-src={platform} alt={platform} className="lazyload" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.grid_item} ${styles.links_container}`}>
                <div className={styles.grid_item}>
                  <div className={styles.caption}>
                    <Typography variant="subtitle1" color={"text.secondary"}>
                      Quick Links
                    </Typography>
                  </div>

                  <ul className={styles.links}>
                    {NavLinks_Data.map(({ title, path }) => (
                      <li key={title}>
                        <Typography variant="body2" color={"text.secondary"}>
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
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.grid_item}>
                  <div className={styles.caption}>
                    <Typography variant="subtitle1" color={"text.secondary"}>
                      Miscellaneous Links
                    </Typography>
                  </div>

                  <ul className={styles.links}>
                    {ExtraLinks_Data.map(({ title, path }) => (
                      <li key={title}>
                        <Typography variant="body2" color={"text.secondary"}>
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
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.grid_item}>
                <div className={styles.caption}>
                  <Typography variant="subtitle1" color={"text.secondary"}>
                    Contact US
                  </Typography>
                </div>

                <ul className={styles.contact_data}>
                  {Contacts_Data.map(({ id, icon, text }) => (
                    <li key={id}>
                      {icon}
                      <pre>
                        <Typography variant="body2" color={"text.secondary"}>
                          {text}
                        </Typography>
                      </pre>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </div>

        <Container maxWidth="xl">
          <div className={styles.copyright_textBox}>
            <Typography
              variant="body2"
              color={"text.secondary"}
              textAlign={"center"}
              width={{ xs: "100%", sm: "auto" }}
            >
              All Rights Reserved © {Current_Year} SVAyurved
            </Typography>

            <Typography
              variant="body2"
              color={"text.secondary"}
              textAlign={"center"}
              width={{ xs: "100%", sm: "auto" }}
            >
              Website crafted by{" "}
              <a
                href="http://skillnuts.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                Skillnuts
              </a>
            </Typography>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer
