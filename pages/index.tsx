import type { NextPage } from "next";

import { AppHeader, SocialLink } from "../components";
import styles from "../styles/pages/home.module.scss";
import Image from "next/image";

import {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import product1 from "../assets/images/products/product1.png";
import product2 from "../assets/images/products/product6.png";
import product3 from "../assets/images/products/product3.png";
import product4 from "../assets/images/products/product4.png";
import product5 from "../assets/images/products/product5.png";

import { Button } from "@mui/material";
import Link from "next/link";

import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowIndicator from "remixicon-react/AddFillIcon";
import Head from "next/head";

const Home: NextPage = () => {
  const [currentView, setCurrentView] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  useEffect(() => {
    if (carousel.current !== null || carousel.current !== undefined) {
      var contentWidth = 0,
        scrolledWidth = 0;

      carousel.current?.addEventListener("scroll", (evt: unknown): void => {
        const evn = evt as ChangeEvent<HTMLDivElement>;
        contentWidth = evn.target.offsetWidth;
        scrolledWidth = evn.target.scrollLeft;

        if (scrolledWidth < contentWidth * 1 - contentWidth / 3) {
          setCurrentView(0);
        } else if (scrolledWidth < contentWidth * 2 - contentWidth / 3) {
          setCurrentView(1);
        } else if (scrolledWidth < contentWidth * 3 - contentWidth / 3) {
          setCurrentView(2);
        } else if (scrolledWidth < contentWidth * 4 - contentWidth / 3) {
          setCurrentView(3);
        } else if (scrolledWidth < contentWidth * 5 - contentWidth / 4) {
          setCurrentView(4);
        } else {
          setCurrentView(4);
        }
      });

      const timer = setTimeout(
        () => {
          scrolledWidth = carousel.current?.scrollLeft ?? 0;
          contentWidth = carousel.current?.offsetWidth ?? 0;
          const currentPositionMark =
            scrolledWidth < contentWidth * 1 - contentWidth / 4
              ? 1
              : scrolledWidth < contentWidth * 2 - contentWidth / 4
              ? 2
              : scrolledWidth < contentWidth * 3 - contentWidth / 4
              ? 3
              : scrolledWidth < contentWidth * 4 - contentWidth / 4
              ? 4
              : scrolledWidth < contentWidth * 5 - contentWidth / 1.2
              ? 0
              : 0;

          carousel.current?.scrollTo({
            left: contentWidth * currentPositionMark,
            top: 0,
            behavior:
              currentPositionMark === 0 ? ("instant" as "auto") : "smooth",
          });
        },

        7000
      );

      return () => {
        clearTimeout(timer);
      };
    }
  }, [carousel, currentView]);

  function slideTo(view: number): void {
    if (carousel.current !== null || carousel.current !== undefined) {
      carousel.current?.scrollTo({
        left:
          carousel.current.offsetWidth * (view + 1) -
          carousel.current.offsetWidth * 0.8,
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <Head>
        <title>Omegacoat LTD - Quality paint closer to you</title>
      </Head>
      <AppHeader /> <SocialLink />
      <section className={styles.HomePage}>
        <section className={styles.firstSection} id="home">
          <div className={styles.content}>
            <h3 className={styles.main_txt}>Quality Paint & Quality Service</h3>
            <p className={styles.txt}>
              We stand to provide you with quality paint for your homes,
              offices, schools, organizations etc, bringing out it true beauty
              and desired looks over longer periods of time.
            </p>
            <span className={styles.img}></span>
          </div>
        </section>
        <section className={styles.secondSection} id="about">
          <h3 className={styles.title}>About Us</h3>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.container}>
                <div className={styles.carousel} ref={carousel}>
                  <CarouselContent image={product1} />
                  <CarouselContent image={product2} />
                  <CarouselContent image={product3} />
                  <CarouselContent image={product4} />
                  <CarouselContent image={product5} />
                </div>
                <div className={styles.indicator}>
                  <span
                    className={currentView === 0 ? styles.active : ""}
                    onClick={() => slideTo(0)}
                  />
                  <span
                    className={currentView === 1 ? styles.active : ""}
                    onClick={() => slideTo(1)}
                  />
                  <span
                    className={currentView === 2 ? styles.active : ""}
                    onClick={() => slideTo(2)}
                  />
                  <span
                    className={currentView === 3 ? styles.active : ""}
                    onClick={() => slideTo(3)}
                  />
                  <span
                    className={currentView === 4 ? styles.active : ""}
                    onClick={() => slideTo(4)}
                  />
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <h3 className={styles.title_txt}>
                INTRODUCING OMEGA COAT & ALLIED PRODUCTS LIMITED
              </h3>
              <p className={styles.txt}>
                We bring you profound regards from the management and staff of
                Omega Coat and Allied Products Limited. Omega Coat, started
                operation five years before formally incorporated as a private
                limited liability company in October 2008 has maintained and
                regionally pursued this principal objective of producing and
                marketing quality paints and allied products to the delight of
                project owners, architects and site engineers. Omega Coat is
                equipped with state of the art machines with an installed
                capacity of a liter over 5 Million liters of paints per annum.
                Manned by season and experienced technical and sales staff, the
                products are customized to withstand the tropical harsh climatic
                condition in Africa particularly in Nigeria. Omega has
                maintained over the years quality in her production which ranges
                from <strong>UNIQUE</strong>, <strong>SPLENDOR</strong> and{" "}
                <strong>EXOTIC</strong>, these three grades are distinctive in
                coverage, viscosity and durability. The three grades have
                varying prices according to their quality and coverage. Our
                products come in different shades and colors according to
                customer specifications.
              </p>
              <Button className={styles.btn}>
                <Link href="/about">
                  <a>Read More</a>
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section className={styles.thirdSection}>
          <h3 className={styles.title}>Testimonials</h3>
          <p className={styles.base_txt}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            animi assumenda excepturi dolorum, fugiat modi. Harum voluptatum
            repudiandae praesentium totam.
          </p>
          <div className={styles.container}>
            <div className={styles.item}>
              <p className={styles.txt}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                maiores architecto sed minima magni itaque unde delectus animi,
                beatae necessitatibus provident dolorem, ratione optio odit
                temporibus, laboriosam laudantium quos libero.
              </p>
              <div className={styles.details}>
                <span className={styles.image}></span>
                <div>
                  <span className={styles.name}>Daniel Amos</span>
                  <span className={styles.position}>client</span>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <p className={styles.txt}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                maiores architecto sed minima magni itaque unde delectus animi,
                beatae necessitatibus provident dolorem, ratione optio odit
                temporibus, laboriosam laudantium quos libero.
              </p>
              <div className={styles.details}>
                <span className={styles.image}></span>
                <div>
                  <span className={styles.name}>Daniel Amos</span>
                  <span className={styles.position}>client</span>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <p className={styles.txt}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                maiores architecto sed minima magni itaque unde delectus animi,
                beatae necessitatibus provident dolorem, ratione optio odit
                temporibus, laboriosam laudantium quos libero.
              </p>
              <div className={styles.details}>
                <span className={styles.image}></span>
                <div>
                  <span className={styles.name}>Daniel Amos</span>
                  <span className={styles.position}>client</span>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <p className={styles.txt}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                maiores architecto sed minima magni itaque unde delectus animi,
                beatae necessitatibus provident dolorem, ratione optio odit
                temporibus, laboriosam laudantium quos libero.
              </p>
              <div className={styles.details}>
                <span className={styles.image}></span>
                <div>
                  <span className={styles.name}>Daniel Amos</span>
                  <span className={styles.position}>client</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.forthSection}>
          <h3 className={styles.title}>FAQ&apos;S</h3>
          <p className={styles.base_txt}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            animi assumenda excepturi dolorum, fugiat modi. Harum voluptatum
            repudiandae praesentium totam.
          </p>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Collapsible Group Item #1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Collapsible Group Item #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Collapsible Group Item #3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <section className={styles.fifthSection}>
          <div className={styles.content}>
            <h3 className={styles.title_txt}>
              Looking for quality paint with great service, then your just a
              click away.
            </h3>
            <div className={styles.action}>
              <Button className={styles.btn}>
                <Link href={"/gallery#01"}>
                  <a>Contact Us</a>
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <footer>@2019 omegacoat LTD</footer>
      </section>
    </>
  );
};

function CarouselContent({
  title,
  image,
}: {
  title?: string;
  image: StaticImageData;
}) {
  return (
    <div className={styles.carousel_content}>
      <Image
        src={image}
        alt={title}
        width={600}
        height={450}
        className={styles.image}
        layout="responsive"
        placeholder="blur"
        blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
      />
    </div>
  );
}

export default Home;

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowIndicator size="0.9rem" />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
