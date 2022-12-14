import React from "react";
import EmailIcon from "./Common/Icon/EmailIcon";
import PhoneIcon from "./Common/Icon/PhoneIcon";
import Location from "./Common/Icon/Location";

const Contacts = () => {
  return (
    <article className=" ">
      <section className="container mx-auto py-14">
        <div className="md:w-2/3 w-full mx-auto text-center">
          <h2 className="md:text-3xl text-2xl text-slate-700 font-extrabold mb-10  inline-block  tracking-wider">
            Contacts
          </h2>

          <ul className=" md:flex md:flex-row flex-col  gap-4 mt-4">
            <div className="md:flex  flex-col md:flex-row gap-8  mx-auto justify-evenly">
              <li className=" flex flex-col items-center md:mb-0 mb-4">
                <div className="  mb-5">
                  <EmailIcon />
                </div>

                <span className="text-slate-600 tracking-wider font-semibold">
                  <a href="mailto:inforaiyyan@gmail.com">inforaiyyan@gmail</a>
                </span>
              </li>

              <li className=" flex flex-col items-center md:mb-0 mb-4">
                <div className="mb-5">
                  <PhoneIcon />
                </div>

                <span className="text-slate-600 tracking-wider font-semibold">
                  8887634517
                </span>
              </li>
              <li className=" flex flex-col items-center md:mb-0 mb-4">
                <div className=" mb-5">
                  <Location />
                </div>

                <span className="text-slate-600 tracking-wider font-semibold">
                  Hyderabad Telangana <br /> India
                </span>
              </li>
            </div>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default Contacts;
