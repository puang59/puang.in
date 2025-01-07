import { MapPin, BriefcaseBusiness } from "lucide-react";

export function Header() {
  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold text-white">karan kumar</h1>

      <div className="mt-4 text-gray-500">
        <MapPin className="w-5 h-5 text-gray-500 inline-block mr-2" />
        chennai, india
        <br />
      </div>
      <div className="mt-3 text-gray-500">
        <BriefcaseBusiness className="w-5 h-5 text-gray-500 inline-block mr-2" />
        {/* cofounder @{"devknit"} */}
        compsci student
      </div>
      <p className="text-gray-400 my-5 leading-relaxed">
        a 19 y/o undergraduate student majoring in computer science. i'm a big
        enthusiast of all things old school and&nbsp;
        <a
          href="https://retro.puang.in"
          className="text-amber-500 hover:text-amber-600"
        >
          retro
        </a>
        . i find joy in learning low level technology and delving into new tech.
        additionally, i have a deep love for media production and working with
        cameras
      </p>
    </div>
  );
}
