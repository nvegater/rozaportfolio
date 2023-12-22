"use client";
import PhotoAlbum, { type RenderPhotoProps } from "react-photo-album";
import { useCallback } from "react";
import Image from "next/image";

const baseURL = "https://d34ftjh07pyt8l.cloudfront.net/";
const imageNames = [
  "P3200214_com.jpg",
  "warsaw_bridge.jpg",
  "dominika_face.jpg",
  "P3200433_com.jpg",
  "P3200220_com.jpg",
  "julia_bridge.jpg",
  "dominika_color.jpg",
  "oslo_people.jpg",
  "water_jump.jpg",
  "IMG_4421_com.jpg",
  "dominica_monum.jpg",
  "P3200373_com.jpg",
  "marocco_clif.jpg",
  "weronika_vog.jpg",
  "weronika_leaf.jpg",
  "P1350018 3 18.41.49_com.jpg",
  "P3200302_com.jpg",
  "dominika_fontain.jpg",
  "P3200141_com.jpg",
  "P3200452-3_com.jpg",
  "P3200211_com.jpg",
  "mexican_temple.jpg",
  "dominika_color_up.jpg",
];

const photos = imageNames.map((name) => ({
  src: `${baseURL}${name}`,
  width: 800, // default width, adjust as needed
  height: 600, // default height, adjust as needed
}));

export default function GalleryPage() {
  const renderPhoto = useCallback(
    ({ imageProps: { alt, style, ...rest } }: RenderPhotoProps) => (
      <Image
        alt={alt}
        style={{
          ...style,
          borderRadius: "4px",
          boxShadow:
            "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
        }}
        {...rest}
        placeholder={undefined}
        objectFit="cover"
        height={600}
        width={800}
      />
    ),
    [],
  );
  return (
    <PhotoAlbum layout="columns" photos={photos} renderPhoto={renderPhoto} />
  );
}
