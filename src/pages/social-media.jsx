import { Avatar, Typography, Button } from "@material-tailwind/react";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  FunnelIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";


function SocialMedia() {
  const [isInstagram, setIsInstagram] = useState(true);

  const handleToggle = () => {
    setIsInstagram((prevIsInstagram) => !prevIsInstagram);
  };
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">

                </div>


              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="textPrimary" className="mb-2">
                  Social Media Link
                </Typography>
                <div className="my-8 flex justify-center space-x-4 ">


                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      Access news and updates about missing persons from popular social media platforms like Instagram and Facebook. Stay informed and spread awareness.                    </Typography>

                    <Typography>
                      <Typography variant="h3" color="white">
                        {isInstagram ? 'Instagram' : 'Facebook'}
                      </Typography>
                      <Button variant="gradient" fullWidth onClick={handleToggle}>
                        {isInstagram ? 'Switch to Facebook' : 'Switch to Instagram'}
                      </Button>
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <AnimatePresence>

                      <div className="w-full h-screen flex items-center justify-center">
                        {isInstagram ? (
                          <iframe
                            src="https://widgets.sociablekit.com/instagram-hashtag-feed/iframe/145635"
                            frameBorder="0"
                            width="100%"
                            height="100%"
                          ></iframe>
                        ) : (
                          <iframe
                            src="https://widgets.sociablekit.com/facebook-hashtag-posts/iframe/145612"
                            frameborder="0"
                            width="100%"
                            height="1000"
                          ></iframe>
                        )}
                      </div>



                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default SocialMedia;
