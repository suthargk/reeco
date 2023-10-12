import { rest } from "msw";
import { tableData } from "../utils";

export const handlers = [
  rest.get("/list", (req, res, ctx) => {
    return res(ctx.json({ list: tableData }));
  }),
];
