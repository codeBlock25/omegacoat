import "../styles/globals.scss";
import "../assets/css/bootstrap.min.css";
import "../assets/css/animate.min.css";
// import "../assets/css/owl.carousel.min.css";
// import "../assets/css/owl.theme.default.min.css";
import "../assets/css/flaticon.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/meanmenu.min.css";
import "../assets/css/boxicons.min.css";
import "../assets/css/line-awesome.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
