import express from "express";
import dotenv from "dotenv";
import { connectDB, dbConnectioSync} from "./config/db.config.js";
import todoRoutes from "./routes/todo.routes.js";
import logger from "./middlewares/logger.js";
import routeNotFound from "./middlewares/notfound.js";
import appErrorhandler from "./middlewares/errorhandler.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use(logger);
app.use('/api/v2/todos', todoRoutes);

// handles all not found routes
app.use(routeNotFound);

// Custome error handler
app.use(appErrorhandler);

// Establishing database connection.
connectDB();
dbConnectioSync();

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`==> Server started on port: ${PORT}`);
})