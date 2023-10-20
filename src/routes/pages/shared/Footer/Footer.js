import React from 'react';
import logo from '../../../../assests/logo (2).png';
import { FaFacebook } from 'react-icons/fa';
import youtube from '../../../../assests/youtube (2).png';
import face from '../../../../assests/face.png';
import instra from '../../../../assests/insta.png';
const Footer = () => {

    const d = new Date();
    const  year = d.getFullYear();
    return (
        <>
            <footer>
                <div className="footer p-10 bg-base-200  bg-green-400  text-base-content">
                    <aside>
                        <img className='w-[60px]' src={logo} alt="" />
                        <p>H#000 (0th Floor), Road #00,</p>
                        <p>New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Project</a>
                        <a className="link link-hover">Our Team</a>
                        <a className="link link-hover">Terms Conditions</a>
                        <a className="link link-hover">Submit Listing</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Quick Links</header>
                        <a className="link link-hover">Quick Links</a>
                        <a className="link link-hover">Rentals</a>
                        <a className="link link-hover">Sales</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Our blog</a>
                    </nav>
                    <nav>
                        <header className="footer-title">About us</header>
                        <a className="link link-hover">Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit. Purus commodo ipsum <br />
                            duis laoreet maecenas. Feugiat </a>
                        <div className='flex space-x-1'>
                            <img className='w-[50px]' src={face} alt="" />
                            <img className='w-[60px]' src={youtube} alt="" />
                            <img className='w-[60px]' src={instra} alt="" />
                        </div>
                    </nav>



                </div>
                <div className="footer footer-center  bg-green-400  p-4 bg-base-300 text-base-content">
                    <aside>
                        <p>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
                    </aside>
                </div>
            </footer>


        </>


    );
};

export default Footer;