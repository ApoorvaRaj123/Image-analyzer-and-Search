"use server";

import axios from "axios";

export const Lens = async (url?: string) => {
  const options = {
    method: "GET",
    url: "https://google-lens-image-search1.p.rapidapi.com/api/v1/google-lens/search/",
    params: {
      query_url: url,
    },
    headers: {
      "X-RapidAPI-Key": "b2c40c440dmsh1dfac47e352171ep11959djsn98863fd540a2",
      "X-RapidAPI-Host": "google-lens-image-search1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
