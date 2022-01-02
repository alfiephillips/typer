import { MongoHelper } from "../../../utils/mongo";

const helper = new MongoHelper();

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json({
        data: {
          method: "GET",
          user: null,
          message: "Register route.",
          error: null,
        },
      });

    case "POST":
      const { username, email, password } = req.body;
      const response = await helper.createUser(username, email, password);
      return response;

    case "PUT":
      return res.status(200).json({
        data: {
          method: "PUT",
          user: null,
          message: "Register route.",
          error: null,
        },
      });

    case "DELETE":
      return res.status(200).json({
        data: {
          method: "DELETE",
          user: null,
          message: "Register route.",
          error: null,
        },
      });
  }
}
