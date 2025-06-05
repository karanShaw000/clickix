import rateLimit from "express-rate-limit";

export const generateShortUrlLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10  requests per windowMs
  message: { message: 'Too many requests, please try again after 10 minutes' },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
