import type { IncomingMessage, ServerResponse } from "http";
import type { User } from "~/types/api/users";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const result: User[] = await $fetch("http://localhost:5000/users");

  return result;
};
