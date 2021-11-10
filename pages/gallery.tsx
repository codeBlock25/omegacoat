import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AppHeader } from "../components";
import styles from "../styles/pages/gallery.module.scss";
import GalleryPic1 from "../assets/images/gallery/1.jpg";
import GalleryPic2 from "../assets/images/gallery/2.jpg";
import GalleryPic3 from "../assets/images/gallery/3.jpg";
import GalleryPic4 from "../assets/images/gallery/4.jpg";
import GalleryPic5 from "../assets/images/gallery/5.jpg";
import GalleryPic6 from "../assets/images/gallery/6.jpg";
import GalleryPic7 from "../assets/images/gallery/7.jpg";
import GalleryPic8 from "../assets/images/gallery/8.jpg";
import GalleryPic9 from "../assets/images/gallery/9.jpg";
import GalleryPic10 from "../assets/images/gallery/10.jpg";
import GalleryPic11 from "../assets/images/gallery/11.jpg";
import GalleryPic12 from "../assets/images/gallery/12.jpg";
import GalleryPic13 from "../assets/images/gallery/13.jpg";
import GalleryPic14 from "../assets/images/gallery/14.jpg";
import GalleryPic15 from "../assets/images/gallery/15.jpg";
import GalleryPic16 from "../assets/images/gallery/16.jpg";
import GalleryPic17 from "../assets/images/gallery/17.jpg";
import GalleryPic18 from "../assets/images/gallery/18.jpg";
import GalleryPic19 from "../assets/images/gallery/19.jpg";
import GalleryPic20 from "../assets/images/gallery/20.jpg";
import GalleryPic21 from "../assets/images/gallery/21.jpg";
import GalleryPic22 from "../assets/images/gallery/22.jpg";
import GalleryPic23 from "../assets/images/gallery/23.jpg";
import GalleryPic24 from "../assets/images/gallery/24.jpg";
import GalleryPic25 from "../assets/images/gallery/25.jpg";
import GalleryPic26 from "../assets/images/gallery/26.jpg";
import GalleryPic27 from "../assets/images/gallery/27.jpg";
import GalleryPic28 from "../assets/images/gallery/28.jpg";
import GalleryPic29 from "../assets/images/gallery/29.jpg";
import GalleryPic30 from "../assets/images/gallery/30.jpg";
import GalleryPic31 from "../assets/images/gallery/31.jpg";
import GalleryPic32 from "../assets/images/gallery/32.jpg";
import GalleryPic33 from "../assets/images/gallery/33.jpg";
import GalleryPic34 from "../assets/images/gallery/34.jpg";

const Gallery: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Galley works | Omegacoat LTD - Quality paint closer to you
        </title>
      </Head>
      <AppHeader />
      <section className={styles.GalleryPage}>
        <h2 className={styles.title}> Our Gallery works</h2>
        <p className={styles.txt}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos,
          minima fugiat itaque dicta tenetur!
        </p>
        <div className={styles.view}>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic1}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern burgallow</h3>
            <ul>
              <li>job - pop design</li>
              <li>Date of deliever - 12th feb 2012</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic2}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern burgallow angle two</h3>
            <ul>
              <li>job - pop design</li>
              <li>Date of deliever - 12th feb 2012</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic3}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern partition design</h3>
            <ul>
              <li>job - paint for interior design</li>
              <li>Date of deliever - 12th feb 2016</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic4}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern abstract design</h3>
            <ul>
              <li>job - paint for interior design and decoration </li>
              <li>Date of deliever - 12th aug 2012</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic5}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern 90deg home partition</h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 24th mar 2013</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic6}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern home design</h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 26th feb 2016</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic7}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern wallpaper and paint design</h3>
            <ul>
              <li>job - paint for interior design</li>
              <li>Date of deliever - 18th apr 2015</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic8}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern school desigm</h3>
            <ul>
              <li>job - paint for exterior design</li>
              <li>Date of deliever - 10th aug 2014</li>
              <li>paint type - stain and emulsion</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic9}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern home 90deg partition </h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 24th mar 2013</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic10}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern home 180deg partition</h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 16th may 2013</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic11}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>painted className</h3>
            <ul>
              <li>job - paint for both interior design</li>
              <li>Date of deliever - 20th oct 2012</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic12}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern home</h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 02th june 2017</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic13}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern bedroom design</h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 11th nov 2018</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic14}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern home design</h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 11th nov 2018</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic15}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>classic pop design</h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 21th feb 2017</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic16}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern home desgin</h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 02th june 2017</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic17}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern officed design</h3>
            <ul>
              <li>job - paint for both interior design</li>
              <li>Date of deliever - 20th mar 2016</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic18}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern multi colored home design</h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 02th june 2017</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic19}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern home design setup</h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 12th feb 2012</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic20}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern 90deg home partition design and wallpaper design</h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 12th july 2018</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic21}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern hotel design</h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 12th july 2018</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic22}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3> modern home design</h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 02th june 2017</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic23}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern sitting room design</h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 12th feb 2012</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic24}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern design </h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 12th feb 2012</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic25}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern classroom design </h3>
            <ul>
              <li>job - paint for both interior and exterior design</li>
              <li>Date of deliever - 05th apr 2017</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic26}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern hotel design </h3>
            <ul>
              <li>job - paint for both interior and exterior hotel design</li>
              <li>Date of deliever - 05th may 2014</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic27}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3> company design</h3>
            <ul>
              <li>
                job - paint for both interior and exterior public organization
                design
              </li>
              <li>Date of deliever - 25th sep 2016</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic28}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>road way paint job</h3>
            <ul>
              <li>job - paint for road walk way</li>
              <li>Date of deliever - 05th feb 2015</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic29}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern home exterior design </h3>
            <ul>
              <li>job - paint for exterior design</li>
              <li>Date of deliever - 16th march 2017</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic30}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern home exterior design </h3>
            <ul>
              <li>job - paint for exterior design</li>
              <li>Date of deliever - 16th march 2017</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic31}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern home exterior design </h3>
            <ul>
              <li>job - paint for exterior design</li>
              <li>Date of deliever - 16th march 2017</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic32}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern home exterior design </h3>
            <ul>
              <li>job - paint for exterior design</li>
              <li>Date of deliever - 16th march 2017</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic33}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern home exterior design </h3>
            <ul>
              <li>job - paint for exterior design</li>
              <li>Date of deliever - 16th march 2017</li>
            </ul>
          </div>
          <div className={styles.galleryBox}>
            <Image
              layout="responsive"
              className={styles.image}
              src={GalleryPic34}
              alt="sample work"
              width={600}
              height={450}
              placeholder="blur"
              blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
            />
            <h3>modern home exterior design </h3>
            <ul>
              <li>job - paint for exterior design</li>
              <li>Date of deliever - 16th march 2017</li>
            </ul>
          </div>
        </div>
        <section className={styles.contactSection}>
          <div className={styles.content}>
            <h3 className={styles.title_txt}>
              Looking for quality paint with great service, then your just a
              click away.
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
      </section>
    </>
  );
};

export default Gallery;
