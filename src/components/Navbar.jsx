
import { navItems } from '../constant'
import logo from "../assets/NN.png"


const Navbar = () => {
    return (
        <div>
            <nav className="backdrop-blur-lg   flex justify-around  items-center md:mt-0 mt-4">
                <div className="logo w-32 cursor-grab md:block hidden">
                    <img src={logo} alt="" />
                </div>
                <ul className='flex gap-6 font-extrabold text-xl justify-center items-center '>
                    {/* {navItems.map((items, index) => (
                        <li key={index}><a href={items.href} target='_blank'>{items.label}</a></li>

                    ))} */}
                    <li className='text-red-800'><a href="https://www.instagram.com/nizami.noor_/" target='_blank'>Instagram</a></li>
                    <li className='text-blue-800'><a href="https://mail.google.com/mail/?view=cm&to=rpurpose81@gmail.com&su=SUBJECT&body=BODY" target='_blank'>Mail</a></li>
                </ul>
                {/* <div className="buttons flex gap-4">
                    <button className='rounded-xl w-32  font-bold bg-red-700 text-lg  px-4 py-3 text-white'>Instagram</button>
                    
                </div> */}
            </nav>
        </div>
    )
}

export default Navbar
