import type { IncomingMessage, ServerResponse } from "http";
import {
  googleAuth,
  calendarClient,
  GOOGLE_CALENDAR_ID,
} from "~/utils/google/auth";

export default defineEventHandler(async () => {
  const authClient = await googleAuth.getClient();

  const res = await calendarClient.events.insert({
    auth: authClient,
    calendarId: GOOGLE_CALENDAR_ID,
    requestBody: {
      summary: "Test Event added by Node.js",
      description: "This event was created by Node.js",
      start: {
        dateTime: "2022-07-12T09:00:00-02:00",
        timeZone: "Asia/Tokyo",
      },
      end: {
        dateTime: "2022-07-12T17:00:00-02:00",
        timeZone: "Asia/Tokyo",
      },
      attendees: [],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 10 },
        ],
      },
    },
  });

  return {
    res,
  };
});
