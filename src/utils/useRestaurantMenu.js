import { useEffect, useState } from "react";
import { MenuApiurl } from "./constants";
import mockMenuData from "./mockMenuData";

const useResturantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

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
  return resMenu;
};
export default useResturantMenu;
