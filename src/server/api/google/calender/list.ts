import { calendarClient, GOOGLE_CALENDAR_ID } from "~/utils/google/auth";

export default defineEventHandler(async () => {
  const res = await calendarClient.events.list({
    calendarId: GOOGLE_CALENDAR_ID,
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: "startTime",
  });

  return {
    res,
  };
});
