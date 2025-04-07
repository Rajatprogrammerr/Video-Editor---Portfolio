
import { navItems } from '../constant'
import logo from "../assets/NN.png"


const Navbar = () => {
    return (
        <div>
            <nav className="backdrop-blur-lg sticky top-0  pt-3 pb-3 pl-12 pr-12 flex justify-between items-center ">
                <div className="logo w-32 cursor-grab">
                    <img src={logo} alt="" />
                </div>
                <ul className='flex gap-6 font-extrabold text-xl'>
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
