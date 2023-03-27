import { rest } from "msw";
import { setupServer } from "msw/node";
import { API } from "./paths";
import { postsMock } from "mocks/posts";
import { commentsMock } from "mocks/comments";

const server = setupServer(
  rest.get(API.posts, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(postsMock));
  }),

  rest.get(API.comments, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(commentsMock));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server, rest };
