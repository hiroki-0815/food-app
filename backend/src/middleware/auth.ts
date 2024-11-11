import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({
  audience: process.env.Auth0_AUDIENCE,
  issuerBaseURL: process.env.AUth0_ISSURE_BASE_URL,
  tokenSigningAlg: 'RS256'
});