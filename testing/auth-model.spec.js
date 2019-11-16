const Users = require("../auth/auth-model");
const db = require("../database/dbConfig");
const server = require("../api/server");

describe("auth-model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("the insert function", () => {
    it("should register a new user", async () => {
      const user = { username: "bob", password: "pass123" };
      await Users.insert(user);

      const users = await db("users");
      expect(users.length).toBe(1);
    });

    it("should resolve to the new user", async () => {
      const userInfo = { username: "bob", password: "pass123" };
      const user = await Users.insert(userInfo);

      expect(user).toEqual({ id: 1, username: "bob", password: "pass123" });
    });
  });
});
