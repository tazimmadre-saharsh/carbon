import moment from 'moment';
import { CarbonData } from "./carbondata.js";

const postCarbonData = async (req, res) => {
  // const { airTemp, waterTemp, lightIntensity, co2,phValue } = req.body;
  const data = await CarbonData.create(req.body);
  res.send({ data, status: "OK" });
};

const getCarbonData = async (req, res) => {
  const {startDate, endDate} = req.query;
  let q={};
  if(startDate && endDate){
    q.createdAt = { $gte: moment(startDate).toDate(), $lt: moment(endDate).toDate() };
  }
  const data = await CarbonData.find(q);
  res.send({ data, status: "OK" });
};

export { getCarbonData, postCarbonData };
