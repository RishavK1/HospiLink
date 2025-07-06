import { createContext, useEffect } from "react";
export const AppContext = createContext();
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const AppContextProvider = (props) => {
  const [doctors, setDoctors] = useState([]);

  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/doctor/list");
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  const value = {
    doctors,getDoctorsData,
    currencySymbol,
    backendUrl

  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
