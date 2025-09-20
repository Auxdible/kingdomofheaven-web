import {
  ComputerIcon,
  Gamepad,
  Globe,
  HandHeart,
  MessageCircleIcon,
  UsersIcon,
} from "lucide-react";
import { Marquee } from "../../components/marquee";
import { FancyButton } from "../../components/fancy-button";
export function Home() {
  return (
    <main className="pb-40">
      <header className="min-h-screen max-xl:min-h-[720px] flex-col flex mb-64 max-xl:mb-16 xl:items-center relative">
        <div className="flex max-xl:flex-col max-lg:mt-16 xl:my-auto max-w-[2200px]   xl:px-20 items-center w-full z-10 ">
          <div
            className={
              "flex flex-col items-left justify-center max-xl:text-center flex-1 leading-[8.5rem] pt-5 relative"
            }
          >
            <h1 className="text-[10rem] max-3xl:text-[9rem] max-xl:text-7xl max-sm:text-6xl font-bold">
              KINGDOM
            </h1>
            <h1 className="text-[10rem] max-3xl:text-[9rem] max-xl:text-7xl max-sm:text-6xl font-bold">
              OF
            </h1>
            <h1 className="text-[10rem] max-3xl:text-[9rem] max-xl:text-7xl max-sm:text-6xl font-bold">
              HEAVEN
            </h1>
          </div>
          <div className="flex-1">
            <img
              src={"/koh.png"}
              className={
                "self-center w-full max-xl:max-w-[320px] max-w-[728px] ml-auto"
              }
            />
          </div>
        </div>

        <img
          src={"/bg.svg"}
          className={"absolute top-0 left-0 z-0 opacity-50 w-full h-full xl:min-h-[920px] max-xl:min-h-[720px] object-cover"}
        />
        <img
          src={"/transition.svg"}
          className="w-full absolute -bottom-76 max-xl:-bottom-16 left-0"
        />
      </header>
      <section className="">
        <Marquee containerClass="font-montserrat">
          <div className="w-[2250px] overflow-hidden flex mb-5">
            <h2 className="text-4xl flex-1 text-center">Lasting Fellowship</h2>
            <h2 className="text-4xl flex-1 text-center">Active Community</h2>
            <h2 className="text-4xl flex-1 text-center">Growing in Faith</h2>
            <h2 className="text-4xl flex-1 text-center">Sharing the Gospel</h2>
            <h2 className="text-4xl flex-1 text-center">Deep Bible Studies</h2>
          </div>
        </Marquee>
        <div className="flex flex-col items-center justify-center pt-20">
          <h2 className="text-6xl max-xl:text-5xl mb-20 font-montserrat text-center">
            Welcome to Kingdom of Heaven!
          </h2>
          <ul className="w-full flex max-w-[1420px] max-xl:flex-col gap-5">
            <li className="border-4 rounded-2xl px-4 flex-1 text-center">
              <UsersIcon className="mx-auto my-5 mt-10" size={128} />
              <h2 className="text-4xl font-bold py-5">Who are We?</h2>
              <span className="text-xl font-roboto">Acts 2:42</span>
              <p className="font-roboto text-2xl py-5">
                We are a community of believers currently looking to expand our
                online presence and connect with others who share our faith. We
                are dedicated to fostering a welcoming environment where
                everyone can grow in their relationship with Jesus and learn
                more about the Bible.
              </p>
            </li>
            <li className="border-4 rounded-2xl px-4 flex-1 text-center">
              <Globe className="mx-auto my-5 mt-10" size={128} />
              <h2 className="text-4xl font-bold py-5">Our Mission</h2>
              <span className="text-xl font-roboto">Matthew 28:19-20</span>
              <p className="font-roboto text-2xl py-5">
                We are looking to passionately share the love of Jesus,
                fostering a community of hope and support for Christians to grow
                in their faith and understanding of the Bible. We desire to
                create fellowship surrounding common interests, and to provide a
                space for believers to connect, learn, and fellowship with
                eachother.
              </p>
            </li>
            <li className="border-4 rounded-2xl px-4 flex-1 text-center">
              <HandHeart className="mx-auto my-5 mt-10" size={128} />
              <h2 className="text-4xl font-bold py-5">Join us!</h2>
              <span className="text-xl font-roboto">1 Thessalonians 5:11</span>
              <p className="font-roboto text-2xl py-5">
                We invite you to become part of our growing community. Whether
                it&apos;s joining a Bible study, playing videogames with
                likeminded Christians, engaging in online discussions, or
                sharing your testimony, there&apos;s a place for you here.
                Together, we can encourage one another in faith and build
                lasting connections centered on Christ.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <Marquee containerClass="font-montserrat mt-20">
        <div className="w-[2250px] overflow-hidden flex mb-5">
          <h2 className="text-4xl flex-1 text-center">Galatians 6:2</h2>
          <h2 className="text-4xl flex-1 text-center">James 5:16</h2>
          <h2 className="text-4xl flex-1 text-center">Matthew 18:20</h2>
          <h2 className="text-4xl flex-1 text-center">Acts 2:42</h2>
          <h2 className="text-4xl flex-1 text-center">1 John 1:7</h2>
          <h2 className="text-4xl flex-1 text-center">Proverbs 27:17</h2>
        </div>
      </Marquee>
      <section className="max-w-[1420px] mx-auto">
        <h1 className="text-6xl max-xl:text-5xl font-montserrat text-center pt-20">
          Our Ministries
        </h1>
        <article className="flex max-xl:flex-col max-xl:text-center gap-24 my-20">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-5xl font-bold py-5">KOH Discord Server</h2>
            <p className="font-roboto text-2xl py-5">
              Our Discord server is the heart of our community, where we gather
              to share, learn, and grow together. It is a moderated server,
              focused on creating an environment where believers can engage in
              fellowship, prayer, and edifying conversations. We have channels
              for various topics, including Bible discussions, prayer requests,
              and general fellowship.
            </p>
            <FancyButton
              className="w-fit max-xl:mx-auto"
              color1="blue-500"
              color2="blue-200"
              href="https://discord.gg/cTe75nr2ta"
            >
              <span className="flex items-center font-montserrat gap-2">
                <MessageCircleIcon /> Join the Discord Server
              </span>
            </FancyButton>
          </div>
          <div className="flex-1 flex flex-col items-center relative">
            <div className="absolute -inset-1 blur-3xl bg-gradient-to-br from-blue-200 to-blue-500 opacity-30 overflow-hidden" />
            <iframe
              src="https://discord.com/widget?id=1170808145220751531&theme=light"
              width="350"
              height="500"
              className="z-10"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </article>
        <article className="flex max-xl:flex-col max-xl:text-center flex-row-reverse gap-24 my-20">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-5xl font-bold py-5">KOH Minecraft Server</h2>
            <p className="font-roboto text-2xl py-5">
              Our Minecraft Server is a place where we can fellowship while
              playing Minecraft. Our survival server opens up the opportunity
              for fellowship among likeminded gamers. We have a claims system,
              jobs, in-game economy and numerous helpful commands.
            </p>
            <FancyButton
              className="w-fit max-xl:mx-auto"
              color1="blue-500"
              color2="blue-200"
              href="http://minecraft.kingdomofheaven.online:8123"
            >
              <span className="flex items-center font-montserrat gap-2 ">
                <Gamepad /> View Server Map
              </span>
            </FancyButton>
          </div>
          <div className="flex-1 flex flex-col items-center relative">
            <div className="absolute -inset-1 blur-3xl bg-gradient-to-br from-blue-200 to-blue-500 opacity-30 overflow-hidden" />
            <img
              src="/kohmc.png"
              alt="Discord Server"
              className="mx-auto my-5 mt-10 w-[525px] z-10 rounded-2xl"
            />
          </div>
        </article>
        <article className="flex max-xl:flex-col max-xl:text-center gap-24 my-20">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-5xl font-bold py-5">KOH Steam Group</h2>
            <p className="font-roboto text-2xl py-5">
              Our Steam group is a place where gamers can connect and play games
              together. We encourage fellowship through gaming, and our Steam
              group serves as a hub for connecting Christian gamers.
            </p>
            <FancyButton
              className="w-fit max-xl:mx-auto"
              color1="blue-500"
              color2="blue-200"
              href="https://steamcommunity.com/groups/KOH_ONLINE"
            >
              <span className="flex items-center font-montserrat gap-2">
                <ComputerIcon /> Join the Steam Group
              </span>
            </FancyButton>
          </div>
          <div className="flex-1 flex flex-col items-center relative">
            <div className="absolute -inset-1 blur-3xl bg-gradient-to-br from-blue-200 to-blue-500 opacity-30 overflow-hidden" />
            <img
              src="/steam.webp"
              alt="Steam Group"
              className="mx-auto my-5 mt-10 w-96 z-10 rounded-full"
            />
          </div>
        </article>
      </section>
    </main>
  );
}
