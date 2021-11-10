import type { NextComponentType } from "next";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

export const AppHeader: NextComponentType = () => {
  const { asPath } = useRouter();
  return (
    <>
      <header className={styles.AppHeader}>
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
    name: "Our Products",
    link: "/products",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  { name: "Contact", link: "/contact-us" },
];
