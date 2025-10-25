import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useRestaurantMenu";
import ResturantCategory from "./RestrurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const resMenu = useResturantMenu(resId);
  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resMenu[0]?.data?.cards[2]?.card?.card?.info;

  const itemCards =
    resMenu?.[0]?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards?.[1]?.card?.card?.itemCards || [];

  const categories =
    resMenu?.[0]?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines?.join(", ")}</p>
      <p>
        ⭐ {avgRating} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <ResturantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
