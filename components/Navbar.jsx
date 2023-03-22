import Image from "next/image";
import Link from "next/link";
import logoDark from "../public/image/cute.png";

const Header = () => {
  return (
    <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4 ">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image width={150} height={130} src={logoDark} alt="cute" />
          </div>
        </Link>
        <div>
          <ul className="hidden lg:inline-flex gap-8 uppercase text-sm font-semibold">
            <li className="headerLi">Home</li>
            <li className="headerLi">Style</li>
            <li className="headerLi">Travel</li>
            <li className="headerLi">Sports</li>
            <li className="headerLi">Film & Music</li>
            <li className="headerLi">Health</li>
            <li className="headerLi">Entertainment</li>
            <li className="headerLi">Politic</li>
          </ul>
        </div>
        <div className="flex items-center gap-8 text-lg">
          
        <div className="flex items-center md:space-x-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                title="Search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 text-gray-100"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-30 py-2 pl-8 pr-2 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-800 text-gray-100"
            />
          </div>
          <button className="uppercase text-sm border-[1px] border-black hover:border-secondaryColor px-4 py-1 font-semibold hover:text-violet-800 rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-violet-400">
            Sign In
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
