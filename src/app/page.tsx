import Image from "next/image";

export default function HomePage() {
  return (
    <div
      id="profile-container"
      className="flex h-[100vh] bg-[#191923] text-white"
    >
      <div id="background-image" className="relative w-1/5">
        <Image
          src="https://d34ftjh07pyt8l.cloudfront.net/Roza.jpg"
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
            I am 24 years old, I take photos, I travel, I dance, I teach yoga, I
            feel. When I turned 18, I started traveling around the world on my
            own. I have been to 35 countries and worked in 4. I encourage young
            girls to overcome fear and travel alone into the unknown. I try to
            bring stories from my travels in the form of stories of amazing
            people and photographs of places that take a breath away. In
            addition, I photograph commercially, I worked in marketing for
            several years, I created social media for few Polish festivals and
            sports events, and I ran a restaurant in Norway.
          </p>
          <br />
          <p className="text-sm">
            If you think that we can start cooperation in the area of
            photography, marketing, social media, wellness in general, yoga,
            travelling lectures or other event , let me know.
          </p>
          <br />
          <p className="text-sm"> Let's get to know each other!</p>
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
