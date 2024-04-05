"use client";

import Container from "@/components/ui/container";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";

export const revalidate = 0;

const ContactsPage = () => {
  return (
    <div className="pt-10">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Contacts info</h1>
          <p className="text-lg  mb-8">
            Welcome to our online store! At{" "}
            <span className="font-semibold">Desk Culture</span>, our mission is
            to deliver an exceptional shopping experience to every customer.
            <br />
            <br />
            As an e-commerce platform, we offer a wide range of electronic
            products, including smartphones, top-brand accessories, computers,
            tablets, cameras, audio equipment, and gaming consoles. <br />
            <br />
            Our dedication lies in providing superior quality, swift and secure
            delivery, multiple payment options, and outstanding customer
            support. <br />
            <br />
            We aspire to be your primary destination for fulfilling all your
            needs, aiming to build enduring relationships with our valued
            customers. <br />
            <br />
            Explore the difference with{" "}
            <span className="font-semibold">Desk Culture</span> today!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a
              href="mailto:desk.culture.official@gmail.com"
              className="contact-card transition duration-300 ease-in-out transform border">
              <div className=" rounded-sm p-6 flex items-center cursor-pointer hover:shadow-md trantition duration-300">
                <AiOutlineMail className="text-3xl text-gray-600 mr-4" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Email Support</h2>
                  <p>desk.culture.official@gmail.com</p>
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/link"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card transition duration-300 ease-in-out transform border">
              <div className=" rounded-sm p-6 flex items-center cursor-pointer hover:shadow-md trantition duration-300 h-full">
                <FaInstagram className="text-3xl text-gray-600 mr-4" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Instagram</h2>
                </div>
              </div>
            </a>
            <a
              href="https://www.tiktok.com/link"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card transition duration-300 ease-in-out transform border">
              <div className=" rounded-sm p-6 flex items-center cursor-pointer hover:shadow-md trantition duration-300 h-full">
                <FaTiktok className="text-3xl text-gray-600 mr-4" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">TikTok</h2>
                </div>
              </div>
            </a>
            <a
              href="https://www.pinterest.com/link"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card transition duration-300 ease-in-out transform border">
              <div className=" rounded-sm p-6 col-span-3 md:col-span-2 flex items-center cursor-pointer hover:shadow-md trantition duration-300 h-full">
                <FaPinterest className="text-3xl text-gray-600 mr-4" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Pinterest</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactsPage;
