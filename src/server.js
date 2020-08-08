require("dotenv").config();

import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";
import Airtable from "airtable";

const { PORT, NODE_ENV, API_KEY } = process.env;
const dev = NODE_ENV === "development";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: API_KEY,
});

const base = Airtable.base("appFFsGJ723lPKSLj");

base("Apartments")
  .select({
    // Selecting the first 3 records in Main View:
    maxRecords: 3,
    view: "Main View",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        console.log("Retrieved", record.get("Name"));
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
