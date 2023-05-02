import http from "node:http";
import path from "node:path";
//Routes
const routes = [
    { path: "/", file: "index.html" },
    { path: "/photography", file: "photography.html" },
    { path: "/nature", file: "nature.html" },
    { path: "/ocean", file: "ocean.html" },
    { path: "/forest", file: "forest.html" },
    { path: "/go", file: "go.html" },
    { path: "/settings", file: "settings.html" },
    { path: "/donate", file: "donate.html" },
    { path: "/404", file: "404.html" },
  ];
  // Define routes using the routes array
  routes.forEach((route) => {
    app.get(route.path, (req, res) => {
      res.sendFile(path.join(__dirname, "static", route.file));
    });
  });
  // Catch-all route
  app.get("/*", (req, res) => {
    res.redirect("/404");
  });
