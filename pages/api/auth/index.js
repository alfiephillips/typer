export default function handler(req, res) {
  return res.status(200).json({
    method: req.method,
    path: req.path,
    message: "Authentication route",
  });
}
