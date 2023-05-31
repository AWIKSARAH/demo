import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import TimeAgo from "react-timeago";
import { IconButton } from "@material-tailwind/react";
import "./style.css";
import { Option } from "@/widgets/option";
import { Typography } from "@material-tailwind/react";

const Feed = ({ totalPages, limit, data, id }) => {
  const startTime = data.idDisaster && data.idDisaster.start_time;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const characterLimit = 100;
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.section
        className="article-section"
        key={data.id} // Add a unique key for smoother transitions
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="article-component">

          <motion.div
            className="article__img flex justify-start content-between flex-row items-start"
            style={{
              backgroundImage: `url(${import.meta.env.VITE_APP_IMG_URL}${data.idPerson?.image}) `,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Typography
              variant="lead"
              className="mx-4 py-2"
            >

              <span
                className={`inline-block py-2 px-4 rounded-full uppercase text-xs font-bold ${data.type === "lost" ? "bg-orange-500 text-white" : "bg-blue-500 text-white"
                  }`}
              >
                {data.type}
              </span>

            </Typography>
          </motion.div>

          <div className="article__content">
            <div className="article__header">
              <h2 className="article__title">{data.title}</h2>


            </div>
            <p className="article__desc">
              {showFullDescription
                ? data.description
                : data.description.slice(0, characterLimit) + "..."}
            </p>
            <div className="article__user">
              <div className="user__info">
                <div className="user__details">
                  <h3 className="user__name">{data.idPerson?.name}</h3>
                  <p className="user__date text-gray-500">
                    {data.idDisaster && (
                      <TimeAgo date={data.idDisaster?.start_time || ""} />
                    )}
                  </p>
                </div>
              </div>
              <Link to={`/a/${data._id}`}>
                <IconButton className="share-icon" color="primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </IconButton>
              </Link>
            </div>
          </div>
          <div className="flex justify-end">
            <Option id={id} />
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Feed;
