import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import express from "express";
import cookieParser from "cookie-parser";

const server = express();
const frontendOrigin = process.env.FRONTEND_ORIGIN;

server.use(express.json());
server.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

server.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        imgSrc: ["'none'"],
        fontSrc: ["'none'"],
        styleSrc: ["'none'"],
        scriptSrcAttr: ["'none'"],
        frameAncestors: ["'none'"],
        connectSrc: ["'self'", frontendOrigin],
      },
    },
  })
);

server.use(
  cors({
    origin: frontendOrigin,
    methods: "GET, POST, PUT, PATCH, DELETE",
    credentials: true,
  })
);

server.listen(8080, () =>
  console.log(`Server started running on http://localhost:8080`)
);
