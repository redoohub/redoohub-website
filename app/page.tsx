import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl mb-4">
            Short Videos in Mixed Reality.
          </h1>
          <p className="text-xl mb-6">
            As a content-driven AR and VR platform, Redoo Hub is the best place
            to discover and share immersive experiences.
          </p>
          <div className="border-2 border-gray-600 p-2 w-fit rounded-lg flex flex-col sm:flex-row items-center">
            <div className="flex">
              <Image
                src="/apple-logo.png"
                alt="Apple Logo"
                width={40}
                height={20}
              />
              <Image
                src="/meta-logo.png"
                alt="Meta Logo"
                width={70}
                height={30}
                className="ml-2"
              />
            </div>
            <Link href="/team" className="text-white mt-2 sm:mt-0 sm:ml-2 border-gray-600 border-2 hover:bg-white hover:text-black py-3 px-6 rounded-full">
              <span>Join our Team</span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/promo1.jpg"
            alt="AR/VR Content Creation"
            width={800}
            height={500}
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row bg-white p-5 rounded-lg text-gray-800 items-center justify-between gap-4 md:gap-8 mt-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl mb-4">Features</h2>
          <ul className="text-xl list-disc pl-6 space-y-4">
            <li>
              <span className="text-2xl block">Optimized for AR and VR</span>
              <span>
                Our unique interface is specifically designed to deliver
                immersive augmented reality and virtual reality content.
              </span>
            </li>
            <li>
              <span className="text-2xl block">Content Creation Tools</span>
              <span>
                Use our intuitive and powerful tools to create and upload your
                own AR/VR content.
              </span>
            </li>
            <li>
              <span className="text-2xl block">VR and AR Asset Library</span>
              <span>
                Enhance your content with our extensive library of AR/VR assets
                and 3D models.
              </span>
            </li>
            <li>
              <span className="text-2xl block">
                Immersive Viewing Experience
              </span>
              <span>
                Experience seamless streaming of AR and VR content for a truly
                immersive viewing.
              </span>
            </li>
            <li>
              <span className="text-2xl block">Community Collaboration</span>
              <span>
                Collaborate with other creators in real-time, share ideas and
                create together.
              </span>
            </li>
            <li>
              <span className="text-2xl block">
                Accessible on All Platforms
              </span>
              <span>
                Access and enjoy our content on any platform - whether
                you&apos;re on a PC, a VR headset, or a mobile device.
              </span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/promo2.jpg"
            alt="AR/VR Features"
            width={800}
            height={500}
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mt-16">
        <div className="text-center px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl mb-4">
            Support our Kickstarter Campaign
          </h2>
          <p className="text-xl mb-6">
            Proudly based in California, our mission is to better connect people
            using the power of AR and VR.
          </p>
          <button className="text-white border-gray-600 border-2 hover:bg-white hover:text-black py-3 px-6 rounded-full">
            <span>Coming Soon</span>
          </button>
        </div>
      </section>
    </>
  );
}
