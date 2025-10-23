import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useResturantMenu(resId);
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
