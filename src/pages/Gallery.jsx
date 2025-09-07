import * as React from "react";

import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import SubFooter from "../components/layout/SubFooter";
import ScrollToTop from "../utils/ScrollToTop";
import Baner from "../components/Baner";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import PicturesLay from "../components/layout/PicturesLay";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { motion } from "motion/react";
import { photosArrLong } from "../data/picturesData";

import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";

function Gallery() {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <ScrollToTop />
      <Navigation />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, repeat: false }}
      >
        <section className="w-screen mx-auto items-center justify-center flex flex-col mb-[5rem]">
          <PicturesLay
            photos={photosArrLong}
            onClick={(currentIndex) => setIndex(currentIndex)}
          />

          <Lightbox
            index={index}
            open={index >= 0}
            close={() => setIndex(-1)}
            slides={photosArrLong}
            plugins={[
              Captions,
              Counter,
              Download,
              Fullscreen,
              Zoom,
              Thumbnails,
            ]}
            counter={{ container: { style: { top: "unset", bottom: 0 } } }}
            captions={{
              showToggle: true,
              descriptionTextAlign: "end",
            }}
          />
        </section>
      </motion.div>
      <Baner />
      <Footer />
      <SubFooter />
    </>
  );
}
export default Gallery;
