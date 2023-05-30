import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import '../../pages/style.css';
export function TeamCard({ img, data, position, socials }) {
  console.log(data.disasterIds[0]);
  return (
    <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
      {typeof data.disasterIds[0] === 'undefined' ? (

        <img
          className="w-32 h-32 rounded-full mx-auto"
          src={data.image ? `http://localhost:5000${data.image}` : '../../../public/img/logo.png'}
          alt="Profile picture"
        />
      ) : (
        <Link to={`/a/${data.disasterIds[0]}`}>
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src={data.image ? `http://localhost:5000${data.image}` : '../../../public/img/logo.png'}
            alt="Profile picture"
          />
        </Link>
      )}


      <h2 className="text-center text-2xl font-semibold mt-3"> {data.name}</h2>
      <p className="text-center text-gray-600 mt-1">{data.found}</p>
      <div className="flex justify-center mt-5">
        <a className="text-blue-500 hover:text-blue-700 mx-3">Color Eyes<p className="text-center text-gray-600 font-bold mt-1" style={{ fontSize: "10px" }}>{data.eyes ? data.eyes : "loading"}</p></a>
        <a className="text-blue-500 hover:text-blue-700 mx-3">Color Skin<p className="text-center text-gray-600 font-bold mt-1" style={{ fontSize: "10px" }}>{data.colorSkin ? data.colorSkin : "loading"}</p></a>
        <a className="text-blue-500 hover:text-blue-700 mx-3">Color Hair<p className="text-center text-gray-600 font-bold mt-1" style={{ fontSize: "10px" }}>{data.colorHair ? data.colorHair : "loading"}</p></a>

      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold">          <TimeAgo date={data.dob || ""} />
        </h3>
        <p className="text-gray-600 mt-2"> {data.description} </p>
        <div className="flex items-center gap-2">
          <ul class="wrapper">
            <li className={`icon facebook ${data.gender === 'Male' ? 'Male' : 'Female'}`}>
              <span className="tooltip">{data.gender}</span>
              <span><i className="fa-solid text-lg fa-person-half-dress"></i></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
