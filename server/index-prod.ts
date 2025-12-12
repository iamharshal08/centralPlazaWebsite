import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "./routes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

registerRoutes(app);

const distPath = path.resolve(__dirname, "..", "dist", "public");
app.use(express.static(distPath, { maxAge: "1d", etag: true }));
app.use("*", (_req, res) => {
  res.sendFile(path.resolve(distPath, "index.html"));
});

const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
