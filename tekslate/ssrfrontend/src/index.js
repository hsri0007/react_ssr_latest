import express from "express";
import RenderHtml from "../helpers/renderer";
import { matchRoutes } from "react-router-config";
import AppRouter from "./client/AppRouter";
import Store from "./redux/store";

const app = express();

app.use(express.static("client"));

app.get("*", (req, res) => {
  //getting Server Side Redux Store
  const store = Store();

  const promises = matchRoutes(AppRouter, req.url)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store, req.url) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises)
    .then(() => {
      const context = {};
      const content = RenderHtml(req, store, context);
      if (context.notFound) {
        res.status(404);
      }
      res.send(content);
    })
    .catch((e) => {
      console.log(e);
      res.send("something went wrong");
    });
});

app.listen(3305, () => {
  console.log("running on port 3305");
});
