
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connect } from './config/db.js';
import { router } from './router/index.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: "json" };

const app = express();
app.use(express.json());
app.use(
  cors({
      credentials: true,
      origin: 'http://localhost:3000',
  })
)
app.use(cookieParser());
connect();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router(app);

app.listen(3200, function () {
  console.log('Example app listening on port 3200!');
});
