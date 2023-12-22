"use client";
import PhotoAlbum, { type RenderPhotoProps } from "react-photo-album";
import { useCallback } from "react";

const baseURL = "https://d34ftjh07pyt8l.cloudfront.net/";
const photos = [
  { src: `${baseURL}P3200214_com.jpg`, width: 800, height: 600 },
  { src: `${baseURL}warsaw_bridge.jpg`, width: 500, height: 300 },
  { src: `${baseURL}dominika_face.jpg`, width: 800, height: 600 },
  { src: `${baseURL}P3200433_com.jpg`, width: 800, height: 600 },
  { src: `${baseURL}P3200220_com.jpg`, width: 800, height: 600 },
  { src: `${baseURL}julia_bridge.jpg`, width: 800, height: 600 },
  { src: `${baseURL}dominika_color.jpg`, width: 800, height: 600 },
  { src: `${baseURL}oslo_people.jpg`, width: 800, height: 600 },
  { src: `${baseURL}water_jump.jpg`, width: 800, height: 600 },
  { src: `${baseURL}IMG_4421_com.jpg`, width: 800, height: 600 },
  { src: `${baseURL}dominica_monum.jpg`, width: 800, height: 600 },
  { src: `${baseURL}P3200373_com.jpg`, width: 800, height: 600 },
  { src: `${baseURL}marocco_clif.jpg`, width: 800, height: 600 },
  { src: `${baseURL}weronika_vog.jpg`, width: 800, height: 600 },
  { src: `${baseURL}weronika_leaf.jpg`, width: 800, height: 600 },
  { src: `${baseURL}P1350018 3 18.41.49_com.jpg`, width: 800, height: 600 },
  { src: `${baseURL}P3200302_com.jpg`, width: 800, height: 600 },
  { src: `${baseURL}dominika_fontain.jpg`, width: 800, height: 600 },
  { src: `${baseURL}P3200141_com.jpg`, width: 800, height: 600 },
  { src: `${baseURL}P3200452-3_com.jpg`, width: 800, height: 600 },
  { src: `${baseURL}P3200211_com.jpg`, width: 800, height: 600 },
  { src: `${baseURL}mexican_temple.jpg`, width: 800, height: 600 },
  { src: `${baseURL}dominika_color_up.jpg`, width: 800, height: 600 },
];
export default function GalleryPage() {
  const renderPhoto = useCallback(
    ({ imageProps: { alt, style, ...rest } }: RenderPhotoProps) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        alt={alt}
        style={{
          ...style,
          borderRadius: "4px",
          boxShadow:
            "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
        }}
        {...rest}
      />
    ),
    [],
  );
  return (
    <PhotoAlbum layout="columns" photos={photos} renderPhoto={renderPhoto} />
  );
}
