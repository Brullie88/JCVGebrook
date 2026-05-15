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
          scriptSrc: ["'self'"],
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
          baseUri: ["'self'"],
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
      crossOriginResourcePolicy: { policy: "same-origin" },
      crossOriginOpenerPolicy: { policy: "same-origin" },
      crossOriginEmbedderPolicy: { policy: "credentialless" },
    })
  );

  // Extra handmatige headers voor scanners die specifieke headers verwachten
  app.use((req, res, next) => {
    // Permissions-Policy
    res.setHeader(
      "Permissions-Policy",
      "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=()"
    );
      // Verwijder X-Frame-Options omdat frame-ancestors in CSP de moderne vervanger is
    // en SAMEORIGIN de preview in AI Studio breekt.
    res.removeHeader("X-Frame-Options");
    // Voorkom lax CORS beleid door expliciet Access-Control-Allow-Origin in te stellen
    // In productie beperken we dit tot het eigen domein
    const origin = process.env.NODE_ENV === "production" ? "https://jcvgebrook.vercel.app" : "*";
    if (process.env.NODE_ENV === "production") {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
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
