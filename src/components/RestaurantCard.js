import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const data = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData.info || {};
  return (
    <div
      data-testid="resCard"
      className=" p-4 m-3 w-70 rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className=" rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>user :{data.loggedInUser}</h4>
    </div>
  );
};

export const withDiscountLabel = () => {
  return (props) => {
    const { resData } = props;
    const { header, subHeader } = resData.info.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className="absolute p-4 m-4 rounded-lg font-bold text-white text-lg">
          {header} {subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
