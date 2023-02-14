import { CarbonData } from "./user.model.js";

const postCarbonData = async (req, res) => {
  // const { airTemp, waterTemp, lightIntensity, co2,phValue } = req.body;
  const data = await CarbonData.create(req.body);
  res.send({ data, status: "OK" });
};

const getCarbonData = async (req, res) => {
  const data = await CarbonData.find({});
  res.send({ data, status: "OK" });
};

export { getCarbonData, postCarbonData };
