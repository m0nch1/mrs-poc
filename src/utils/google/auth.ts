import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();

const GOOGLE_PRIVATE_KEY = process.env.private_key;
const GOOGLE_CLIENT_EMAIL = process.env.client_email;
export const GOOGLE_CALENDAR_ID = process.env.calendar_id;
const SCOPES = ["https://www.googleapis.com/auth/calendar"];

const jwtClient = new google.auth.JWT(
  GOOGLE_CLIENT_EMAIL,
  "./credentials/keys.json",
  GOOGLE_PRIVATE_KEY,
  SCOPES
);

export const calendarClient = google.calendar({
  version: "v3",
  auth: jwtClient,
});

export const googleAuth = new google.auth.GoogleAuth({
  keyFile: "./credentials/keys.json",
  scopes: SCOPES,
});
