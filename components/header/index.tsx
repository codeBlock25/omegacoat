import type { NextComponentType } from "next";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import MenuOpen from "remixicon-react/Menu2FillIcon";
import MenuClose from "remixicon-react/CloseLineIcon";
import { useState } from "react";

export const AppHeader: NextComponentType = () => {
  const { asPath } = useRouter();
  const [isOpen, setOpenState] = useState<boolean>(false);
  return (
    <>
      <header className={styles.AppHeader}>
        <Button
          className={styles.btn_min}
          onClick={() => {
            setOpenState(!isOpen);
          }}
        >
          {!isOpen ? <MenuOpen /> : <MenuClose />}
        </Button>
        <div className={styles.routeLink}>
          {routes.map((route, i) => {
            return (
              <Link href={route.link} key={`route-link-${i}`}>
                <a
                  className={
                    asPath === route.link
                      ? `${styles.link} ${styles.active}`
                      : styles.link
                  }
                >
                  {route.name}
                </a>
              </Link>
            );
          })}
        </div>
        <div
          className={
            isOpen
              ? `${styles.routeLinkMin} ${styles.active}`
              : styles.routeLinkMin
          }
        >
          {routes.map((route, i) => {
            return (
              <Link href={route.link} key={`route-link-${i}`}>
                <a
                  className={
                    asPath === route.link
                      ? `${styles.linkMin} ${styles.active}`
                      : styles.linkMin
                  }
                >
                  {route.name}
                </a>
              </Link>
            );
          })}
        </div>
        <h3 className={styles.title}>Omegacoat</h3>
        <div className={styles.action}>
          <Button className={styles.btn}>Book Supply</Button>
        </div>
      </header>
    </>
  );
};

const routes = [
  {
    name: "Home",
    link: "/#home",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  { name: "Contact", link: "/contact-us" },
];
