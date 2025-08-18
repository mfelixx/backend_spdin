import admin from "../index.js";

export const sendNotification = async (req, res) => {
  const { token, body, id_perjadin } = req.body;

  if (!token || !id_perjadin || !body) {
    return res.status(400).json({ msg: "Missing required fields" });
  }

  const message = {
    token: token,
    notification: {
      body: body,
    },
    data: {
      type: "SPDin",
      id_perjadin: id_perjadin,
    },
  };

  try {
    const response = await admin.messaging().send(message);
    return res
      .status(200)
      .json({ msg: "Notification sent successfully", response });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error sending notification", error: error.message });
  }
};
