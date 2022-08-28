import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();

const GOOGLE_PRIVATE_KEY = process.env.private_key;
const GOOGLE_CLIENT_EMAIL = process.env.client_email;
const GOOGLE_ADMIN_ID = process.env.admin_email;
export const GOOGLE_CALENDAR_ID = process.env.calendar_id;
const SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/admin.directory.resource.calendar",
];

const jwtClient = new google.auth.JWT(
  GOOGLE_CLIENT_EMAIL,
  "./credentials/keys.json",
  GOOGLE_PRIVATE_KEY,
  SCOPES,
  GOOGLE_ADMIN_ID
);

export const calendarClient = google.calendar({
  version: "v3",
  auth: jwtClient,
});

export const adminClient = google.admin({
  version: "directory_v1",
  auth: jwtClient,
});

export const googleAuth = new google.auth.GoogleAuth({
  keyFile: "./credentials/keys.json",
  scopes: SCOPES,
});
