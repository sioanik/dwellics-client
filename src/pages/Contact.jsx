import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (

        <div>
            <Helmet>
                <title>Dwellics | Contact</title>
            </Helmet>
            <div className='flex flex-col md:flex-row justify-around my-20 mx-20'>

                <div className='bg-slate-300 py-10 rounded-3xl px-4 w-60 flex flex-col justify-center gap-10'>

                    <p className="flex flex-row items-center gap-2"><FaLocationDot /> 9599 Erie Rd, Angola, NY, 14006</p>
                    <p className="flex flex-row items-center gap-2"><FaPhoneAlt /> (716) 780-7498</p>
                    <p className="flex flex-row items-center gap-2"><MdEmail /> info@dwellics.com</p>

                </div>

                <div className="flex-grow">
                    <form noValidate className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
                        <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
                        <div>
                            <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                            <input id="name" type="text" placeholder="Your name" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                            <input id="email" type="email" placeholder="Your email" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1 ml-1">Message</label>
                            <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50">Send</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;