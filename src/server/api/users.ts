import type { IncomingMessage, ServerResponse } from "http";
import type { User } from "~/types/api/users";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const result: User[] = await $fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return result;
};
