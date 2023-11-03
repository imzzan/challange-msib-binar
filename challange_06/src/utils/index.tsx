import axios from "axios";

export const getAllData = async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
