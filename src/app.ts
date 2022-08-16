import * as express from "express";

//import routes
import imageRoute from "./routes/imageRoute";

const app = express();
const port = 7777;

app.get("/", (req, res) => {
  res.send(
    "Hello Udacity, <br/> Try going to <a href='/image?filename=image&width=300&height=300'>/image?filename=image&width=300&height=300</a>"
  );
});

//image route
app.use("/image", imageRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
