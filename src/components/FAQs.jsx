import React from "react";
import { Fade } from "react-awesome-reveal";

const FAQs = () => {
  return (
    <section className="bg-white pb-7 text-slate-900">
      <div className="container flex flex-col justify-center p-3 mx-auto md:p-8">
        <Fade>
          <h2 className="mb-10 mt-10 text-3xl font-bold leading-none text-center sm:mx-4">
            Your Questions, Answered with Care ✨
          </h2>
        </Fade>
        <div className="flex flex-col divide-y divide-gray-300 sm:mx-12 lg:px-12 xl:px-32 mb-10">
          {/* FAQs */}
          <Fade>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:font-semibold">
                Do I need to visit a dentist if nothing’s hurting?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Absolutely! Just like regular car maintenance keeps your ride
                  smooth, dental checkups catch potential issues before they
                  turn into major discomforts. Prevention is always better than
                  cure, right?
                </p>
              </div>
            </details>
          </Fade>

          <Fade>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:font-semibold">
                Is brushing twice a day enough for healthy teeth?
              </summary>
              <div>
                <p className="px-4 pb-4">
                  Brushing is a great start, but flossing and professional
                  cleanings are key to keeping your smile truly healthy. Some
                  areas need a little extra TLC that your toothbrush can&apos;t
                  reach.
                </p>
              </div>
            </details>
          </Fade>

          <Fade>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:font-semibold">
                Why do my gums bleed when I brush?
              </summary>
              <div>
                <p className="px-4 pb-4">
                  Bleeding gums might mean you&apos;re dealing with gum
                  inflammation or early signs of gum disease. It&apos;s best to
                  have it checked early—we&apos;re here to help get your gums
                  back in top shape.
                </p>
              </div>
            </details>
          </Fade>

          <Fade>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:font-semibold">
                Is teeth whitening safe?
              </summary>
              <div>
                <p className="px-4 pb-4">
                  Yes, when done professionally! DIY hacks might seem tempting,
                  but they can harm your enamel. Trust us to help you brighten
                  your smile safely and effectively.
                </p>
              </div>
            </details>
          </Fade>

          <Fade>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:font-semibold">
                What causes bad breath?
              </summary>
              <div>
                <p className="px-4 pb-4">
                  Bad breath can come from leftover food particles, gum issues,
                  or even an unbalanced diet. Regular cleanings and checkups
                  help keep it in check. Let&apos;s freshen things up together!
                </p>
              </div>
            </details>
          </Fade>

          <Fade>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:font-semibold">
                Can I ignore small cavities until they hurt?
              </summary>
              <div>
                <p className="px-4 pb-4">
                  Not a great idea! Cavities grow over time and can lead to more
                  serious issues if left untreated. Catching them early keeps
                  your teeth healthier and saves you from future pain.
                </p>
              </div>
            </details>
          </Fade>

          <Fade>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:font-semibold">
                What makes Guru Nanak Dental different?
              </summary>
              <div>
                <p className="px-4 pb-4">
                  We&apos;re not just about fixing teeth—we focus on creating an
                  experience that&apos;s comfortable, caring, and tailored to
                  you. From advanced technology to a warm environment,
                  we&apos;re all about making you smile.
                </p>
              </div>
            </details>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
