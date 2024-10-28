
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className=" w-[80%]  m-auto py-20">
        <div className=" w-[80%] h-[496px]  py-10  m-auto">
          <div className="w-[60%] m-auto">
            <h1 className="text-center font-Montserrat text-lg font-bold text-[#23A6F0]">
              Welcome
            </h1>

            <h1 className="text-center font-Montserrat text-6xl font-bold leading-relaxed text-white py-10">
              Selling on the internet like a pro
            </h1>

            <h1 className="text-center font-Montserrat text-xl text-white tracking-wide">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h1>
            <div className="flex justify-center space-x-4 py-10">
              <Link
                href="/login"
                className="bg-[#23A6F0] border-2 border-[#23A6F0] text-white font-Montserrat font-bold text-sm px-6 py-4 rounded-md hover:bg-[#4c60b4] hover:border-[#4c60b4] hover:text-white"
              >
                Get Quote Now
              </Link>
              <Link
                href="/login"
                className="text-[#23A6F0] border-2 border-[#23A6F0]  font-Montserrat font-bold text-sm px-6 py-4 rounded-md hover:bg-white hover:border-white hover:text-[#252B42]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[80%]   m-auto  mb-20">
        <div className="flex space-x-7">
          <div className=" p-10  bg-white flex-1 rounded">
            <div className="w-[70px] h-[76px] bg-[#FFDCD1] rounded">
              {" "}
              <h1>&nbsp;</h1>
            </div>
            <h1 className="py-5 font-Montserrat font-bold text-[#252B42] text-lg">
              training Courses
            </h1>
            <div className="w-[50px] h-[2px] bg-red-500 rounded">
              {" "}
              <h1>&nbsp;</h1>
            </div>
            <p className=" font-Montserrat text-sm w-[86%] font-semibold text-[#737373] py-5 tracking-wide  leading-relaxed">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div className=" p-10  bg-white flex-1 rounded">
            <div className="w-[70px] h-[76px] bg-[#B9EAA8] rounded">
              {" "}
              <h1>&nbsp;</h1>
            </div>
            <h1 className="py-5 font-Montserrat font-bold text-[#252B42] text-lg">
              2,769 online courses
            </h1>
            <div className="w-[50px] h-[2px] bg-red-500 rounded">
              {" "}
              <h1>&nbsp;</h1>
            </div>
            <p className=" font-Montserrat text-sm w-[86%] font-semibold text-[#737373] py-5 tracking-wide  leading-relaxed">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div className=" p-10  bg-[#23A6F0] flex-1 rounded">
            <div className="w-[70px] h-[76px] bg-white rounded">
              {" "}
              <h1>&nbsp;</h1>
            </div>
            <h1 className="py-5 font-Montserrat font-bold text-white text-lg">
              training Courses
            </h1>
            <div className="w-[50px] h-[2px] bg-white rounded">
              {" "}
              <h1>&nbsp;</h1>
            </div>
            <p className=" font-Montserrat text-sm w-[86%] font-semibold text-white py-5 tracking-wide  leading-relaxed">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
