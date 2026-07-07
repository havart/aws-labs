const express = require("express");
const app = express();
const PORT = process.env.PORT || 80;
const ENVIRONMENT = process.env.ENV || "Unknown/Local";

app.get("/", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>MVP Launcher</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f4f6f9; }
                .container { background: white; padding: 30px; border-radius: 10px; display: inline-block; box-shadow: 0px 4px 10px rgba(0,0,0,0.1); }
                h1 { color: #232f3e; }
                .badge { padding: 10px 20px; border-radius: 5px; color: white; font-weight: bold; font-size: 1.2em; display: inline-block; margin-top: 10px; }
                .prod { background-color: #2ecc71; }
                .stage { background-color: #e67e22; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🚀 MVP Launcher App</h1>
                <p>Ваш контейнер успішно запущено у Fargate!</p>
                <div class="badge ${ENVIRONMENT.toLowerCase() === "production" ? "prod" : "stage"}">
                    Середовище: ${ENVIRONMENT}
                </div>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT} in ${ENVIRONMENT} mode.`);
});
