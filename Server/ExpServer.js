const express = require("express");
const bodyParser = require("body-parser");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const userRoutes = require("../Routes/userRoutes");
require("dotenv").config();
require("../Database");

const app = express();
app.use(bodyParser.json());
const cors = require("cors");

app.use(cors());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "User Authentication API",
      version: "1.0.0",
      description: "User CRUD with authentication",
    },
    servers: [{ url: "http://localhost:" + process.env.PORT }],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
