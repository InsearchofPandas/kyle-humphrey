import React from "react";
import ContactForm from "./ContactForum";
import BackButtonAnim from "./utilities/BackButtonAnim";

export default function ContactPage() {
  return (
    <div className="bg-bgColor pt-32  md:pt-20">
      <ContactForm />
      {/* ///////////////Bottom///////////////////// */}

      <div className="flex justify-center p-8 ">
        <div className="w-3/4">
          <BackButtonAnim />
        </div>
      </div>
    </div>
  );
}
