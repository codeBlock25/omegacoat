import { NextComponentType } from "next";
import FacebookIcon from "remixicon-react/FacebookFillIcon";
import InstagramIcon from "remixicon-react/InstagramFillIcon";
import TwitterIcon from "remixicon-react/TwitterFillIcon";
import GoogleIcon from "remixicon-react/GoogleFillIcon";
import WhatsAppIcon from "remixicon-react/WhatsappFillIcon";
import { RemixiconReactIconComponentType } from "remixicon-react";
import { IconButton } from "@mui/material";
import styles from "./style.module.scss";

export const SocialLink: NextComponentType = () => {
  return (
    <div className={styles.social_links}>
      {socialLinks.map((sLink, i) => {
        return (
          <IconButton
            key={`social-link-${i}`}
            title={sLink.name}
            className={styles.btn}
          >
            <a
              href={sLink.link}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {<sLink.icon />}
            </a>
          </IconButton>
        );
      })}
    </div>
  );
};

const socialLinks: {
  name: string;
  link: string;
  icon: RemixiconReactIconComponentType;
}[] = [
  {
    name: "Facebook",
    link: "https://fb.com",
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    link: "https://instagram.com",
    icon: InstagramIcon,
  },
  {
    name: "Google",
    link: "https://google.com",
    icon: GoogleIcon,
  },
  {
    name: "Twitter",
    link: "https://twitter.com",
    icon: TwitterIcon,
  },
  {
    name: "WhatsApp",
    link: "https://whatsapp.com",
    icon: WhatsAppIcon,
  },
];
