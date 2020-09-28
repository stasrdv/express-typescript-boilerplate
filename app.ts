import {
  handleCors,
  handleBodyRequestParsing,
  handleErrors,
} from "./common/common";
const express = require("express");
const router = express.Router();

class App {
  public app = express();

  constructor() {
    this.initDefaults();
  }

  private initDefaults(): void {
    this.app.use("/", router);
    this.initHandlers();
    this.app.listen(4000, (err: any) => {
      if (err) {
        return console.log(err);
      }

      return console.log(`server is listening on ${4000}`);
    });
  }

  private initHandlers() {
    handleBodyRequestParsing(router);
    handleCors(router);
    handleErrors(router);
  }
}

export default new App();
