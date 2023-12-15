import Image from "next/image";

export default function HomePage() {
  return (
    <div
      id="profile-container"
      className="flex h-[100vh] bg-[#191923] text-white"
    >
      <div id="background-image" className="relative w-1/5">
        <Image
          src="https://d2yhylprzvt9g1.cloudfront.net/home-roza.jpg"
          alt="background image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <section
        id="bio"
        className="grid-rows-10 relative grid w-4/5 grid-cols-5 pl-12"
      >
        <div className="col-start-1 col-end-3 row-start-3 row-end-7 text-justify">
          <p className="text-sm">
            Hi! Welcome to rozaczarnota.com. Here I’m sharing travel experience, peoples’s stories and photos. 
          </p>
          <br />
          <p className="text-sm">
            Since I was 18 years old, I’ve been travelling to 35 countries. Solo travel is the best way to understand the world and being amazed by the beauty of nature. Travelling has also broaden my personality. I hope this website will encourage you to travel more and experience different cultures. Professionally, I’m working in marketing, social media and also as a yoga teacher. My passion is photography and music.          </p>
          <br />
          <p className="text-sm">
            If you would like to partner together please don’t hesitate to contact me.
          </p>
          <br />
          <div className="flex flex-col">
            <span className="text-end text-sm font-bold">+48 730 522 524</span>
            <span className="text-end text-sm font-bold">
              czarnota.roza@gmail.com
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 mb-8 mr-8 md:mb-24 md:mr-24">
          <p className="text-5xl">rozaczarnota</p>
        </div>
      </section>
    </div>
  );
}
