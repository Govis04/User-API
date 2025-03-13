const express = require("express");
const bodyParser = require("body-parser");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const userRoutes = require("../Routes/userRoutes");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
// Swagger Configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "UMS Authentication API",
            version: "1.0.0",
            description: "API for UserManagement",
        },
        servers: [{ url: "http://localhost:3000" }],
    },
    apis: ["../Routes/userRoutes.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));