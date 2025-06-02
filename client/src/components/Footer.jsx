import logo from "../images/logos/logo.svg";
import facebook from "../images/logos/facebook.svg";
import twitter from "../images/logos/twitter.svg";
import youtube from "../images/logos/youtube.svg";
import instagram from "../images/logos/instagram.svg";
import appStore from "../images/logos/App-store.svg";
import googlePlay from "../images/logos/google-play.svg";
import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 py-10 flex flex-col w-full items-start gap-10 bg-neutral-950 text-white">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row justify-between w-full gap-10">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <img src={logo} className="w-36" alt="Logo" />
          <div className="flex flex-col gap-2">
            <p className="text-lg hover:text-green-500 cursor-pointer">Movies</p>
            <p className="text-lg hover:text-green-500 cursor-pointer">TV Shows</p>
          </div>
        </div>

        {/* Right */}
        <nav className="flex flex-col sm:flex-row gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-lg text-gray-400 font-semibold">Genre</p>
            <p className="hover:text-green-500 cursor-pointer">Action</p>
            <p className="hover:text-green-500 cursor-pointer">Drama</p>
            <p className="hover:text-green-500 cursor-pointer">Comedy</p>
            <p className="hover:text-green-500 cursor-pointer">Thriller</p>
            <p className="hover:text-green-500 cursor-pointer">Sci-fi</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg text-gray-400 font-semibold">Recommendation</p>
            <p className="hover:text-green-500 cursor-pointer">Trending</p>
            <p className="hover:text-green-500 cursor-pointer">Upcoming</p>
            <p className="hover:text-green-500 cursor-pointer">Newly Added</p>
          </div>
        </nav>
      </div>

      {/* Social & Download */}
      <div className="flex flex-col sm:flex-row justify-between w-full gap-6">
        {/* Social Media */}
        <div className="flex flex-col gap-3">
          <p className="text-gray-400 text-base">Follow us on</p>
          <div className="flex gap-4">
            <img src={facebook} className="w-6 cursor-pointer" alt="Facebook" />
            <a
              href="https://x.com/ShekharBha99161"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} className="w-6 cursor-pointer" alt="Twitter" />
            </a>
            <img src={youtube} className="w-6 cursor-pointer" alt="YouTube" />
            <a
              href="https://www.instagram.com/_shekhar_bhandari/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} className="w-6 cursor-pointer" alt="Instagram" />
            </a>
          </div>
        </div>

        {/* App Downloads */}
        <div className="flex gap-4">
          <img src={appStore} className="w-32" alt="App Store" />
          <img src={googlePlay} className="w-32" alt="Google Play" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full border-t border-neutral-800 pt-6 flex flex-col gap-3">
        <p className="text-center text-gray-400 text-sm">© 2021 All rights reserved</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <p className="hover:text-green-500 underline cursor-pointer">Terms of Service</p>
          <p className="hover:text-green-500 underline cursor-pointer">Privacy Policy</p>
          <p className="hover:text-green-500 underline cursor-pointer">Contact Us</p>
        </div>
      </div>
    </footer>
  );
}
