import connectToDatabase from "../../../utils/mongo";

export default async function handler(req, res) {
  const { client, db } = connectToDatabase();

  const users = db.collection("user");
  return res.status(200).json({
    method: req.method,
    path: req.path,
    message: "Register route",
  });
}
