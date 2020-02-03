const express = require("express");
const app = express();
const PORT = 5050;
const Rv = require("./dataController");

app.use(express.json());

app.get("/api/riot", Rv.getAllRaves);
app.post("/api/riot", Rv.createNewRaves);
app.put("/api/riot/:id", Rv.rsvpNow);
app.delete("/api/riot/:id", Rv.removeRave);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
