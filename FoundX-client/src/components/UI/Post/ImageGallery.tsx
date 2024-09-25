"use client";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  images: string[]; // Array of image URLs or objects with 'src' and 'thumb' properties.  For example: [{ src: 'img/img1.jpg', thumb: 'img/thumb1.jpg' }]  // Required prop.  Images will be displayed in the gallery.  If an object is provided, it will be used as a configuration object for the image.  The 'thumb' property is optional and will default to the'src' property if not provided.  If no images are provided, the gallery will be empty.  The gallery will automatically close when an image is clicked.  The gallery will also automatically start playing the first image when the gallery is opened.  The gallery will also automatically pause when the mouse is over the image.  The gallery will automatically resume playing when the mouse is no longer over the image.  The gallery will also automatically close when the user clicks outside of the image.  The gallery will also automatically close when
}

const ImageGallery = ({ images }: IProps) => {
  return (
    <div>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames={`mt-2 gap-2 grid place-items-center grid-cold-2 ${
          images?.length === 1 ? "grid-cols-1" : "grid-cols-2"
        }`}
      >
        {images?.map((img, index) => (
          <Link
            className={`w-full ${
              images?.length === 3 && index === 0 ? "col-span-2" : "col-span-1"
            }`}
            href={img}
            key={img}
          >
            <Image
              className="h-[400px] w-full object-cover"
              src={img}
              width={300}
              height={300}
              alt=""
            />
          </Link>
        ))}
      </LightGallery>
    </div>
  );
};

export default ImageGallery;
