import express from "express";
import path from "path";
import helmet from "helmet";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Beveiligingsheaders met Helmet
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'"],
          styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
          imgSrc: ["'self'", "data:", "blob:", "https:"],
          fontSrc: ["'self'", "https:", "data:"],
          connectSrc: ["'self'", "https://formspree.io", "https://vitals.vercel-insights.com"],
          frameSrc: ["'self'", "https://www.youtube.com", "https://*.facebook.com"],
          // CRUCIAAL: Sta framing toe voor Google AI Studio zodat de site zichtbaar blijft in het voorbeeldvenster
          frameAncestors: [
            "'self'",
            "https://*.google.com",
            "https://*.aistudio.google.com",
            "https://*.googleusercontent.com",
            "https://aistudio.google.com"
          ],
          objectSrc: ["'none'"],
          upgradeInsecureRequests: [],
        },
      },
      // Schakel de standaard frameguard uit omdat we frameAncestors in CSP gebruiken
      frameguard: false,
      noSniff: true,
      referrerPolicy: { policy: "strict-origin-when-cross-origin" },
      hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true,
      },
    })
  );

  // Extra handmatige headers voor scanners die specifieke headers verwachten
  app.use((req, res, next) => {
    // Permissions-Policy
    res.setHeader(
      "Permissions-Policy",
      "camera=(), microphone=(), geolocation=(), interest-cohort=()"
    );
    // Voor oudere browsers die CSP frame-ancestors niet begrijpen, gebruiken we SAMEORIGIN
    // Maar we moeten voorzichtig zijn: in de preview kan dit nog steeds problemen geven als de scanner streng is.
    // Echter, SAMEORIGIN staat framing toe binnen hetzelfde domein. AI Studio proxy's vaak op manieren die dit kunnen breken.
    // Voor maximale compatibiliteit in de editor laten we dit soms weg, maar de gebruiker vraagt er specifiek om.
    // We proberen het met SAMEORIGIN en als het breekt, schakelen we het uit.
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    next();
  });

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware voor development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Veilige server draait op poort ${PORT}`);
  });
}

startServer();
