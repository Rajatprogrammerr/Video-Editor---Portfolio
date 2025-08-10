
// import { navItems } from '../constant'
import logo from "../assets/NN.png"
import { Mail, Instagram } from 'lucide-react';
import { Link } from "react-router-dom";




const Navbar = () => {
    return (
        <div>
            <nav className="flex flex-col gap-6 m-20  fixed z-10 right-0 ">
                <a href="https://www.instagram.com/_____noor._______/" target="_blank">

                    <Instagram className="text-white cursor-pointer hover:scale-125 transition-transform duration-400 ease-in-out " />
                </a>

                <a href="https://mail.google.com/mail/?view=cm&to=rpurpose81@gmail.com&su=SUBJECT&body=BODY" target="_blank">

                    <Mail className="text-white cursor-pointer hover:scale-125 transition-transform duration-400 ease-in-out " />
                </a>
                  
            </nav>

        </div>
    )
}

export default Navbar
