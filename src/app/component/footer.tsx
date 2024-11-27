import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
        <footer className="bg-slate-300 h-auto my-4 md:grid md:grid-cols-4 sm:grid sm:grid-cols-3 w-auto">

            <section className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold pb-3 pl-2 italic pt-2 text-slate-900">Testy</h1>
              <p className="text-slate-900 pl-2 w-64">On the Other Hand we denounce with righteous indignation and dislike man who are so beguiled 
                and demoralized by the charms of pleasure of the moment</p>
            </section>

            <section className="pt-2 pl-2 flex justify-center">
              <ul className="pb-2 text-slate-900">
                <li><h3 className="font-semibold text-slate-900 ">Tastbite</h3></li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Feedback</li>
                <li>Carrers</li>
              </ul>
            </section>

            <section className="pt-2 pl-2 flex justify-center">
              <ul className="pb-2 text-slate-900">
                <li><h3 className="font-semibold">Legal</h3></li>
                <li>Terms</li>
                <li>Conditions</li>
                <li>Cookies</li>
                <li>Copyright</li>
              </ul>
            </section>

            {/* <section className="mt-2 w-[100%] pl-2 flex justify-center">
              <ul className="mb-16">
                <li><h3 className="font-semibold">Follow</h3></li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagaram</li>
                <li>Youtube</li>
              </ul>
            </section> */}
           
            <section className="pt-2 pl-2 flex flex-col-reverse">
              <p className="text-center">2024 Testybite All right reserved</p>
              <div className="flex justify-around mt-2 text-slate-900">
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