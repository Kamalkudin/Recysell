import "dotenv/config";
import app from "./app.js";
import connect from './config/connection.js';

connect();

//npm run dev buat menjalankan server.js(directory jan lupa)

app.get("/", (req, res) => {
    res.send("Server aktif");
});

const port = 3000;
//port kedobel di cmd
//netstat -ano | findstr :2000
//taskkill /PID PID /F

app.listen(port, () => {
    console.log("Terhubung di port: "+ port);
});