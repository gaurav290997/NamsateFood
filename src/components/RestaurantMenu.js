import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import mockMenuData from "../utils/mockMenuData";
import { useParams } from "react-router";
import { MenuApiurl } from "../utils/constants";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MenuApiurl + resId);
    console.log(data);
    const json = JSON.stringify(data);
    console.log(json);
    setResMenu(mockMenuData);
  };

  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resMenu[0]?.data?.cards[2]?.card?.card?.info;
  const itemCards =
    resMenu?.[0]?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards?.[1]?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines?.join(", ")}</p>
      <p>
        ⭐ {avgRating} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}
            <p>Rs {item.card.info.price / 100}</p>
            <p>
              ⭐ {item.card.info.ratings.aggregatedRating.rating}(
              {item.card.info.ratings.aggregatedRating.ratingCountV2})
            </p>
            <p>Description: {item.card.info.description} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
