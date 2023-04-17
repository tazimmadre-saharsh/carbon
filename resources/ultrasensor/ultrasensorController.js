import { UltraData } from "./ultrasensordata";

const postUltraData = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({ data: [], status: 'ERROR', message: 'Add Data to store.' });
    }
    const data = await UltraData.create(req.body);
    res.send({ data, status: "OK" });
};

const getUltraData = async (req, res) => {
    const data = await UltraData.find({}).sort({ createdAt: -1 });
    // .sort({ createdAt: -1 }).limit(1);
    res.send({ data, status: "OK" });
};

const getSingleUltraData = async (req, res) => {
    const data = await UltraData.find({}).sort({ createdAt: -1 }).limit(1);
    res.send({ data, status: "OK" });
};

export { getUltraData, postUltraData, getSingleUltraData };
