import React from "react";
import QR from "./Images/qr.png";

const MapReview = () => {
  return (
    <div className="h-[90vh] w-full p-4 md:p-6 lg:p-8">
      <div className="h-full w-full rounded-2xl border bg-white">
        <div className="flex h-full flex-col md:flex-row">
          <div className="flex h-[50vh] w-full flex-col items-center justify-center space-y-6 p-4 md:h-full md:w-1/2 md:p-6 lg:space-y-8">
            <div className="aspect-square w-full max-w-[250px] rounded-2xl bg-white p-4 shadow-lg md:max-w-[300px]">
              <img
                src={QR}
                alt="Review QR Code"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="text-center">
              <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                Follow us on Instagram
              </span>
              <h2 className="mt-4 text-xl font-semibold tracking-tight md:text-2xl">
                Scan to Connect
              </h2>
              <p className="mt-2 text-sm text-gray-600 md:text-base">
                Scan the QR code & be a part of our instagram community!
              </p>
            </div>
          </div>
          <div className="h-[40vh] w-full md:h-full md:w-1/2">
            <div className="h-full w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4031.844820431042!2d73.80876127538912!3d18.629072165850513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b85b496c2b49%3A0x5ad33d86ca8dec3f!2sGuru%20Nanak%20Dental%20Clinic!5e1!3m2!1sen!2sin!4v1737358557222!5m2!1sen!2sin"
                className="h-full w-full border-0 rounded-3xl p-3"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapReview;
