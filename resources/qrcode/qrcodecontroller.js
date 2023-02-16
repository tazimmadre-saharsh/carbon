import { QRcodeData } from "./qrcodedata.js";

const postQrcodeData = async (req, res) => {
  const data = await QRcodeData.create(req.body);
  res.send({ data, status: "OK" });
};

const getQrcodeData = async (req, res) => {
  const data = await QRcodeData.find({}).sort({ createdAt: -1 }).limit(1);
  res.send({ data, status: "OK" });
};

export { getQrcodeData, postQrcodeData };
