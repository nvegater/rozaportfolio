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
            Hi! Nice to have you on the website. Here I’m creating space to share travel experience, peoples’s stories and photos. 
          </p>
          <br />
          <p className="text-sm">
            Since I was 18 years old, I’ve been travelling to 35 countries. Solo travels are the best way to understand the world and being amazed by beauty of nature. It has also enriched my personality. So here I’ll share with you my stories and hope to encore you to travel and experience as well. Professionally I’m working in marketing, social media and as a yoga teacher. By passion I’m making photography and music.
          </p>
          <br />
          <p className="text-sm">
            If you would like to start some cooperation together please don’t stop to contact me! :)
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
