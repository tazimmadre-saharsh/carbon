import { CarbonData } from "./user.model.js";

const postCarbonData = async (req, res) => {
  const { tempInDegree, tempInFarenheit } = req.body;
  const data = await CarbonData.create({
    tempInDegree, tempInFarenheit
  });
  res.send({ data, status: "OK" });
}

const getCarbonData = async (req, res) => {
  const data = await CarbonData.find({});
  res.send({ data, status: "OK" });
}

export {
  getCarbonData,
  postCarbonData
};
