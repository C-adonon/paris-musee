import { z } from "zod";

const AdminValidator = z.object({
  email: z.string().email(),
  password: z.string(),
});

export { AdminValidator };
