import { Avatar, Typography, Button } from "@material-tailwind/react";
import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  FunnelIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import axios from "axios";
import Feed from "./feed/feed";
import Pagination from "@mui/material/Pagination";
import { Loading } from "@/widgets/loading";
import { DataContext } from "../data/dataContext";

function Profile() {
  const { data, loading, fetchData } = useContext(DataContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");

  console.log(data);


  useEffect(() => {
    fetchData(searchQuery, filterType, currentPage);
  }, [currentPage, searchQuery, filterType]);


  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleFilterType = (event) => {
    setFilterType(event.target.value);
    setCurrentPage(1);
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
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <Button
                    variant="contained"
                    color="primary"
                    className="px-8 py-2"
                  >
                    <Link to="/announcementForm">Add New Announcement</Link>
                  </Button>
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4">
                    <div className="mr-4 p-3 text-center"
                      onClick={() => { setFilterType('find') }}

                    >
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        className="font-bold uppercase"
                      >
                        {data.foundCount}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        className="font-normal text-blue-gray-500"
                      >
                        Found People
                      </Typography>
                    </div>
                    <div className="mr-4 p-3 text-center"
                      onClick={() => { setFilterType('lost') }}

                    >
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        className="font-bold uppercase"
                      >
                        {data.lostCount}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        className="font-normal text-blue-gray-500"

                      >
                        Lost People
                      </Typography>
                    </div>
                    <div className="p-3 text-center lg:mr-4"
                      onClick={() => { setFilterType('') }}

                    >
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        className="font-bold uppercase"

                      >
                        {data.total}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        className="font-normal text-blue-gray-500"
                      >
                        Total
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="textPrimary" className="mb-2">
                  Announcement
                </Typography>
                <div className="my-8 flex justify-center space-x-4 ">
                  <div className="filter-icon-container">
                    <FunnelIcon className="filter-icon sm:h-4 md:h-5 lg:h-8 xl:h-9" />
                  </div>
                  <div className="search-container">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={handleSearch}
                      className="border border-blue-900 rounded px-5 py-2 bg-white-100 text-gray-700"
                    />
                  </div>
                  <div className="filter-container">
                    <select
                      value={filterType}
                      onChange={handleFilterType}
                      className="border border-blue-900 rounded px-5 py-2 bg-white-100 text-gray-700"
                    >
                      <option value="">All</option>
                      <option value="lost">Lost</option>
                      <option value="find">Find</option>
                    </select>
                  </div>

                  <div className="">
                    <Pagination
                      count={data.totalPages}
                      page={currentPage}
                      onChange={handlePageChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      Welcome to our Lost & Found People Announcement Page. Here, we provide a platform to help reconnect missing individuals with their loved ones. Stay updated as we share information about missing persons, found individuals, and relevant updates from the community. Our goal is to bring hope and support to those searching for their missing loved ones. Join us as we work together to make a difference and bring families back together.                    </Typography>
                  </div>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-10/12">
                    {!loading ? (
                      <AnimatePresence>
                        <div className="feed-grid">
                          {data &&
                            data.data &&
                            data.data.map((item) => (
                              <motion.div
                                key={item._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                              >
                                <Feed
                                  data={item}
                                  id={item._id}
                                  totalPages={data.totalPages}
                                  limit={data.limit}
                                />
                              </motion.div>
                            ))}
                        </div>
                      </AnimatePresence>
                    ) : (
                      <div className="flex flex-wrap gap-4">
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2">
                          <Loading />
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                          <Loading />
                        </div><div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2">
                          <Loading />
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                          <Loading />
                        </div>
                      </div>

                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
    // <h1>huhuhuh</h1>
  );
}

export default Profile;
