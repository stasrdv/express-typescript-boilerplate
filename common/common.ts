import { Router } from "express";
import cors from "cors";
import parser from "body-parser";
import {
  logErrors,
  clientErrorHandler,
  errorHandler,
} from "./error-handlers/error-handler";

export const handleCors = (router: Router) => router.use(cors());

export const handleBodyRequestParsing = (router: Router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleErrors = (router: Router) => {
  router.use(logErrors);
  router.use(clientErrorHandler);
  router.use(errorHandler);
};

export default [handleCors, handleBodyRequestParsing, handleErrors];
