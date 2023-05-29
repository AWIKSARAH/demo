import PropTypes from "prop-types";
import {
  Card, Avatar, Typography,
  IconButton,
} from "@material-tailwind/react";
import { Female } from "@mui/icons-material";
import '../../pages/style.css';
export function TeamCard({ img, data, position, socials }) {
  console.log(data);
  return (
    <Card color="transparent" shadow={false} className="text-center">
      <Avatar
        src={`http://localhost:5000${data.image}`}
        alt={data.name}
        size="xxl"
        className="h-full w-full shadow-lg shadow-gray-500/25"
      />
      <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
        {data.name}
      </Typography>
      {!data.found && (
        <Typography className="font-normal text-blue-gray-500">
          Lost
        </Typography>
      )}
      <div className="mx-auto mt-5">

        <div className="flex items-center gap-2">

          <IconButton color={data.colorSkin === Female ? 'pink' : 'blue'} variant="text">
            <i class="fa-solid text-lg fa-person-half-dress"></i>
          </IconButton>
          <ul class="wrapper">

            <li class="icon facebook">
              <span class="tooltip">Facebook</span>
              <span><i class="fab fa-facebook-f"></i></span>
            </li>
            <li class="icon twitter">
              <span class="tooltip">{data.gender}</span>
              <span><IconButton color='blue' variant="text">
                <i class="fa-solid  text-lg fa-location-dot fa-2xs"></i>
              </IconButton></span>
            </li>
            <li class="icon instagram">
              <span class="tooltip">Instagram</span>
              <span><i class="fab fa-instagram"></i></span>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">

        </div>
      </div>

    </Card>
  );
}


TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
