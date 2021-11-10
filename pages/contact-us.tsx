import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AppHeader } from "../components";
import AddressIcon from "../assets/images/address.png";
import EmailIcon from "../assets/images/email.png";
import PhoneIcon from "../assets/images/phone.png";
import ContactImg from "../assets/images/contact-comment.png";
import { Button } from "@mui/material";
import styles from "../styles/pages/home.module.scss";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact US | Omegacoat LTD - Quality paint closer to you</title>
      </Head>
      <AppHeader />
      <header className="page-title page-bg">
        <div className="container">
          <div className="page-title-inner">
            <div className="section-title">
              <h1>Contact Us</h1>
              <ul className="page-breadcrumbs">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <section className="contact-address-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="box-card fluid-height">
                <div className="box-card-inner full-height">
                  <div className="box-card-icon mb-25">
                    <Image
                      width={100}
                      height={100}
                      layout="responsive"
                      src={AddressIcon}
                      alt="icon"
                    />
                  </div>
                  <div className="box-card-details">
                    <h3 className="box-card-title mb-20">Address</h3>
                    <p className="box-card-para">
                      36 St Andrew Square, Edinburgh, EH2 2YB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="box-card fluid-height">
                <div className="box-card-inner full-height">
                  <div className="box-card-icon mb-25">
                    <Image
                      width={100}
                      height={100}
                      layout="responsive"
                      src={EmailIcon}
                      alt="icon"
                    />
                  </div>
                  <div className="box-card-details">
                    <h3 className="box-card-title mb-20">Email</h3>
                    <p className="box-card-para">
                      <a className="link-us" href="mailto:info@cvbcorp.com">
                        <span className="__cf_email__">info@cvbcorp.com</span>
                      </a>
                    </p>
                    <p className="box-card-para">
                      <a className="link-us" href="mailto:support@cvbcorp.com">
                        <span className="__cf_email__">
                          support@cvbcorp.com
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 offset-md-3 offset-lg-0">
              <div className="box-card fluid-height">
                <div className="box-card-inner full-height">
                  <div className="box-card-icon mb-25">
                    <Image
                      width={100}
                      height={100}
                      layout="responsive"
                      src={PhoneIcon}
                      alt="icon"
                    />
                  </div>
                  <div className="box-card-details">
                    <h3 className="box-card-title mb-20">Phone</h3>
                    <p className="box-card-para">
                      <a className="link-us" href="tel:+1(657)6662261">
                        +1 (657) 666 2261
                      </a>
                    </p>
                    <p className="box-card-para">+1 (657) 666 2261</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-comment-section bg-off-white pt-100 pb-70">
        <div className="container">
          <div className="home-facility-content">
            <div className="row align-items-end">
              <div className="col-sm-12 col-md-12 col-lg-5">
                <div className="home-facility-image">
                  <div className="home-facility-item faq-block-image pb-30">
                    <Image
                      width={600}
                      height={400}
                      src={ContactImg}
                      alt="comment"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-7">
                <div className="home-facility-item pb-30">
                  <div className="blog-comment-leave-area contact-comment-leave-area">
                    <h3 className="sub-section-title">Leave a message</h3>
                    <div className="blog-comment-input-area mt-40">
                      <form id="contactForm">
                        <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group mb-30">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="flaticon-user" />
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  className="form-control"
                                  required
                                  data-error="Please enter your name"
                                  placeholder="Name*"
                                />
                              </div>
                              <div className="help-block with-errors" />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group mb-30">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="flaticon-user" />
                                  </span>
                                </div>
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="form-control"
                                  required
                                  data-error="Please enter your email"
                                  placeholder="Email*"
                                />
                              </div>
                              <div className="help-block with-errors" />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group mb-30">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="flaticon-phone-call" />
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="phone_number"
                                  id="phone_number"
                                  required
                                  data-error="Please enter your phone number"
                                  className="form-control"
                                  placeholder="Phone*"
                                />
                              </div>
                              <div className="help-block with-errors" />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group mb-30">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="flaticon-book" />
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="msg_subject"
                                  id="msg_subject"
                                  className="form-control"
                                  required
                                  data-error="Please enter your subject"
                                  placeholder="Subject*"
                                />
                              </div>
                              <div className="help-block with-errors" />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group mb-30">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="flaticon-email" />
                                  </span>
                                </div>
                                <textarea
                                  name="message"
                                  className="form-control"
                                  id="message"
                                  rows={5}
                                  required
                                  data-error="Write your message"
                                  placeholder="Your Message*"
                                  defaultValue={""}
                                />
                              </div>
                              <div className="help-block with-errors" />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <button
                              className="btn1 orange-gradient btn-with-image"
                              type="submit"
                            >
                              <i className="flaticon-login" />
                              <i className="flaticon-login" />
                              Send A Message
                            </button>
                            <div id="msgSubmit" />
                            <div className="clearfix" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.fifthSection}>
        <div className={styles.content}>
          <h3 className={styles.title_txt}>
            Looking for quality paint with great service, then your just a click
            away.
          </h3>
          <div className={styles.action}>
            <Button className={styles.btn}>
              <Link href={"/contact-us"}>
                <a>Contact Us</a>
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <footer>@2019 omegacoat LTD</footer>
    </>
  );
};

export default Contact;
