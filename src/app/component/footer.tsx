import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
        <footer className="bg-orange-300 h-96 my-4 flex justify-center items-center ">
            <section className="flex flex-col w-48 mr-24 items-center justify-center">

              <h1 className="text-2xl font-semibold">Testy</h1>
              <p className="text-slate-700">"On the Other Hand we denounce with righteous indignation and dislike man who are so beguiled 
                and demoralized by the charms of pleasure of the moment"</p>
            </section>

            <section className="flex flex-col w-48 items-center justify-center ml-16">
              <ul className="mb-16">
                <li><h3 className="font-semibold">Tastbite</h3></li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Feedback</li>
                <li>Carrers</li>
              </ul>
            </section>

            <section className="flex flex-col w-48 items-center justify-center ">
              <ul className="mb-16">
                <li><h3 className="font-semibold">Legal</h3></li>
                <li>Terms</li>
                <li>Conditions</li>
                <li>Cookies</li>
                <li>Copyright</li>
              </ul>
            </section>

            <section className="flex flex-col w-48 items-center justify-center">
              <ul className="mb-16">
                <li><h3 className="font-semibold">Follow</h3></li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagaram</li>
                <li>Youtube</li>
              </ul>
            </section>
           
            <section className="flex flex-col mb-64 ml-6 mt-32 items-center justify-center">
              <p className="ml-6">2024 Testbite - All right reserved</p>
              <div className="flex gap-5 ml-6 mt-3">
              <FaFacebook/>
              <FaTwitter />
              <AiFillInstagram />
              <FaYoutube />
              </div>
            </section>
        </footer>
    </div>
  )
}

export default Footer