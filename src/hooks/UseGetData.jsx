import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../backend/backend";

export function useGetData( path ) {
  const [data, setdata] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/${path}`
        );
        setdata(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getData();
  }, [path]);
  return data;
}
