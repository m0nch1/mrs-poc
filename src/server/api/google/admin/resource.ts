import { adminClient } from "~/utils/google/auth";

export default defineEventHandler(async () => {
  const res = await adminClient.resources.calendars.list({
    customer: "my_customer",
    maxResults: 10,
  });

  return res.data;
});
