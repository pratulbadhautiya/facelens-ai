export const access = "public";
export const methods = ["GET"];
export default async function (req, res) {
  res.json({ name: "FaceLens AI", status: "ok", mode: "browser-side-demo", imageUploadsStored: false, identityRecognitionEnabled: false, message: "Face detection runs in the user's browser. This endpoint does not receive image files." });
}