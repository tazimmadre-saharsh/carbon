import moment from 'moment';
import { CarbonData } from "./carbondata.js";

const postCarbonData = async (req, res) => {
  // const { airTemp, waterTemp, lightIntensity, co2,phValue } = req.body;
  const data = await CarbonData.create(req.body);
  res.send({ data, status: "OK" });
};

const getCarbonData = async (req, res) => {
  const {createdAt} = req.query;
  let q={};
  if(createdAt){
    const startDate = new Date(createdAt);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(createdAt);
    endDate.setHours(23,59,59,999);
    q.createdAt = { $gte: startDate, $lt: endDate };
  }
  const data = await CarbonData.find(q);
  res.send({ data, status: "OK" });
};

export { getCarbonData, postCarbonData };
