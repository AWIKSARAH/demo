import { Avatar, Typography, Button } from "@material-tailwind/react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MapPinIcon, ArrowLeftCircleIcon

} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import TimeAgo from "react-timeago";
import Loading from '../widgets/loading/single'
import { useParams } from "react-router-dom";
import Details from '@/data/announcementDetails';
import Comment from './feed/comment'
import "ol/ol.css"; // Import OpenLayers CSS
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Vector as VectorSource } from "ol/source";
import { Vector as VectorLayer } from "ol/layer";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import { ReportDialog } from "../widgets/option/option";
import Swal from "sweetalert"

export function Profile() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const ref = useRef(null);
  const [mode, setMode] = useState("default"); // Add a state variable for the mode
  const [showMore, setShowMore] = useState(false)
  const [comment, setComment] = useState([]);
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);
  const [url, setUrl] = useState('./img/background-1.jpg')
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state


  let history = useNavigate();

  const handleGoBack = () => {
    history(-1);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}a/${id}`);
        setData(response.data.data);
        //VITE_APP_IMG_URL
        setUrl(`${response.data.data.idPerson.image}`)
        setIsLoading(false); // Set isLoading to false when data is fetched
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

  }, [id, sent]);


  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  const handleCommentEnter = (event) => {
    const { name, value } = event.target;
    setComment((prevComment) => ({ ...prevComment, [name]: value }));
  };

  const mapRef = useRef(null); // Reference to the map container element


  useEffect(() => {
    if (mapRef.current) {
      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat(generateMapPosition()),
          zoom: 13,
        }),
      });

      if (data) {
        const markerFeature = new Feature({
          geometry: new Point(fromLonLat(generateMapPosition())),
        });

        const markerStyle = new Style({
          image: new CircleStyle({
            radius: 6, // Set the desired size of the marker
            fill: new Fill({
              color: "red", // Set the desired color of the marker
            }),
            stroke: new Stroke({
              color: "white",
              width: 2,
            }),
          }),
        });

        markerFeature.setStyle(markerStyle);

        const vectorSource = new VectorSource({
          features: [markerFeature],
        });

        const vectorLayer = new VectorLayer({
          source: vectorSource,
        });

        map.addLayer(vectorLayer);
      }
    }
  }, [data]);
  const generateMapPosition = () => {
    console.log(data);
    if (data.idDisaster && data.idDisaster.length > 0) {
      const { latitude, longitude } = data[0]; // Access the first element
      return [latitude, longitude];
    }

    return [0, 0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const commentUrl = `${import.meta.env.VITE_API_URL}comment`;
    const oldPostUrl = `${import.meta.env.VITE_API_URL}a/${id}`;

    axios
      .post(commentUrl, comment)
      .then((response) => {
        const newCommentId = response.data.data._id;
        axios
          .post(oldPostUrl, { reactionId: newCommentId })
          .then((response) => {
            Swal({
              title: 'Success',
              text: 'Your Comment sent successfully!',
              icon: 'success',
            });
            setSent(!sent); // Toggle the value of sent to trigger the useEffect hook
            setComment({
              name: '',
              comment: '',
            });
          })
          .catch((error) => {
            console.log(error);

            Swal({
              title: 'Error',
              text: 'There was an error sending Your Comment. Please try again later.',
              icon: 'error',
            });
          });
      })
      .catch((error) => {
        console.log(error);
        Swal({
          title: 'Error',
          text: error.response.data.error,
          icon: 'error',
        });
      });
  }
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-cover bg-center" style={{
          backgroundImage: `url(${url})`
        }} />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src={`${url}`}
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <>
                    <Button className="bg-blue-400" onClick={openDialog}>
                      Fill a report
                    </Button>
                    {isDialogOpen && <ReportDialog isOpen={isDialogOpen} onClose={closeDialog} id={id} />}
                  </>                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <Typography variant="lead">
                        <ArrowLeftCircleIcon className="text-blue-500" onClick={handleGoBack} />
                        <Typography
                          variant="small"
                          className="font-normal text-blue-gray-500"
                        >
                          Back                        </Typography>
                      </Typography>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"

                      >

                        <span
                          className={`inline-block py-2 px-4 rounded-full uppercase text-xs font-bold ${data.type === "lost" ? "bg-orange-500 text-white" : "bg-blue-500 text-white"
                            }`}
                        >
                          {data.type}
                        </span>

                      </Typography>


                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {data.idPerson.name}
                      </Typography>
                    </div>

                    <div className="p-3 text-center lg:mr-4">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        <a href="#comment">
                          {data.reactionId.length}</a>
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Comments
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  {data.title}
                </Typography>
                <Typography variant="h3" color="orange" className="mb-2">
                  {data.idPerson.name}
                </Typography>

                <Typography variant="h6" color="gray" className="mb-1">
                  <TimeAgo date={data.idDisaster?.start_time || ""} />
                </Typography>

                <div className="mb-16 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    {data.country}                  </Typography>


                </div>
                {data.idDisaster ? <div className="mb-16 flex items-center justify-center gap-2">
                  <Typography>Check the Details of the Disaster</Typography>
                  <Typography className="font-medium text-red-700">
                    <a href={data.idDisaster?.url} _blank >{data.idDisaster?.url}  </a>
                  </Typography>
                </div> : null}



              </div>
              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      {data.description}
                    </Typography>
                    <Button variant="text" onClick={handleShowMore}>
                      {!showMore ? 'Show More' : 'Show Less'}
                    </Button>
                  </div>

                  {showMore ? <Details data={data} /> : ""}
                </div>
              </div>
              <Typography>
                <div
                  ref={mapRef}
                  style={{ width: "100%", height: "300px", overflow: "hidden" }}
                ></div>

              </Typography>

              <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-800">
                <strong>Reactions:</strong>
                <ul id="comment">
                  {data.reactionId.map((reaction) => (
                    <Comment key={reaction._id} name={reaction.name} description={reaction.comment} />
                  ))}
                </ul>


                <div>
                  <form onSubmit={handleSubmit}>
                    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                      <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                        <label htmlFor="editor" className="sr-only">Publish post</label>
                        <textarea
                          id="editor"
                          rows="8"
                          className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                          placeholder="Write a comment..."
                          name="comment"
                          defaultValue={comment.comment}
                          onChange={handleCommentEnter}
                          required
                        ></textarea>
                        <label htmlFor="name" className="sr-only">Publish post</label>
                        <input
                          id="name"
                          className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                          placeholder="Enter Your Name"
                          name="name"
                          defaultValue={comment.name}
                          onChange={handleCommentEnter}
                          required
                        />

                      </div>
                    </div>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    >
                      Publish post
                    </button>
                  </form>
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
  );
}

export default Profile;
