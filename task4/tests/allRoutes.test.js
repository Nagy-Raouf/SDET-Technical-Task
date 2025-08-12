const request = require("supertest");
const { generateUser } = require("../utils/userFactory");
const statusCodes = require("../data/statusCodes.json");
const messages = require("../data/messages.json");
const testData = require("../data/testData.json");

// Base URL of mock-user-auth API
const API_BASE = "http://localhost:3000";

let user;
let token;

describe("mock-user-auth API - CREATE USER", () => {
  // Route 1: Create user
  // creating user with valid data
  test("POST /api/v1/users — (Valid) Create user with valid payload", async () => {
    user = generateUser();
    const res = await request(API_BASE).post("/api/v1/users").send(user);

    // validate the code and message in the body
    expect(res.statusCode).toBe(statusCodes.success.created);
    expect(res.body).toHaveProperty("message", messages.success.createSuccess);
  });

  // creating user with duplicate data
  test("POST /api/v1/users — (Invalid) Registering with duplicate data", async () => {
    const res = await request(API_BASE).post("/api/v1/users").send(user); // same as already registered

    expect(res.statusCode).toBe(statusCodes.clientError.badRequest);
    expect(res.body).toHaveProperty("message", messages.errors.duplicateUser);
  });

  // creating user with name only
  test("POST /api/v1/users — (Invalid) Registering with name only", async () => {
    const res = await request(API_BASE).post("/api/v1/users").send(testData.users.missingFields.userWithNameOnly);

    expect(res.statusCode).toBe(statusCodes.clientError.badRequest);
    expect(res.body).toHaveProperty("error");
  });

  // creating user with email only
  test("POST /api/v1/users — (Invalid) Registering with email only", async () => {
    const res = await request(API_BASE).post("/api/v1/users").send(testData.users.missingFields.userWithEmailOnly);

    expect(res.statusCode).toBe(statusCodes.clientError.badRequest);
    expect(res.body).toHaveProperty("error");
  });

  // creating user with password only
  test("POST /api/v1/users — (Invalid) Registering with password only", async () => {
    const res = await request(API_BASE).post("/api/v1/users").send(testData.users.missingFields.userWithEPasswordOnly);

    expect(res.statusCode).toBe(statusCodes.clientError.badRequest);
    expect(res.body).toHaveProperty("error");
  });

  // using invalid mail format
  test("POST /api/v1/users — (Invalid) Registering with invalid email format", async () => {
    const res = await request(API_BASE).post("/api/v1/users").send(testData.users.invalidEmail);

    expect(res.statusCode).toBe(statusCodes.clientError.badRequest);
    expect(res.body).toHaveProperty("error");
  });

  // using empty body
  test("POST /api/v1/users — (Invalid) Registering with empty body", async () => {
    const res = await request(API_BASE).post("/api/v1/users");

    expect(res.statusCode).toBe(statusCodes.clientError.badRequest);
    expect(res.body).toHaveProperty("error");
  });
});
describe("mock-user-auth API - AUTHENTICATE USER", () => {
  // Route 2: Authenticate user
  // Authenticate with valid user credentials
  test("POST /api/v1/auth — Authenticate with valid user credentials", async () => {
    const res = await request(API_BASE).post("/api/v1/auth").send({
      email: user.email,
      password: user.password,
    });

    expect(res.statusCode).toBe(statusCodes.success.ok);
    expect(res.body).toHaveProperty("token");
    token = res.body.token;
  });

  // Authenticate user with wrong password
  test("POST /api/v1/auth — Authenticate user with wrong password", async () => {
    const res = await request(API_BASE).post("/api/v1/auth").send({
      email: user.email,
      password: "WrongPass123!",
    });

    expect(res.statusCode).toBe(statusCodes.clientError.unauthorized);
  });

  // Authenticate user with unregistered email
  test("POST /api/v1/auth — Authenticate user with unregistered email", async () => {
    const res = await request(API_BASE).post("/api/v1/auth").send(testData.auth.unregisteredEmail);

    expect(res.statusCode).toBe(statusCodes.clientError.unauthorized);
  });

  // Authenticate user with missing password parameter
  test("POST /api/v1/auth — Authenticate user with missing password", async () => {
    const res = await request(API_BASE).post("/api/v1/auth").send({ email: user.email });

    expect(res.statusCode).toBe(statusCodes.clientError.badRequest);
  });
});
describe("mock-user-auth API - GET USER", () => {
  // Route 3: Get user
  // GET user data using valid token
  test("GET /api/v1/users — Request user data using valid token", async () => {
    const res = await request(API_BASE).get("/api/v1/users").set("Authorization", `${token}`);

    expect(res.statusCode).toBe(statusCodes.success.ok);
    expect(res.body).toHaveProperty("email", user.email);
  });

  // GET user data when token is missing
  test("GET /api/v1/users — Request user data when token is missing", async () => {
    const res = await request(API_BASE).get("/api/v1/users");
    expect(res.statusCode).toBe(statusCodes.clientError.unauthorized);
  });

  // GET user data with invalid token
  test("GET /api/v1/users — Request user data with invalid token", async () => {
    const res = await request(API_BASE).get("/api/v1/users").set("Authorization", "invalid_token");

    expect(res.statusCode).toBe(statusCodes.clientError.unauthorized);
  });
});
describe("mock-user-auth API - PATCH USER", () => {
  // Route 4: Patch user
  // update user with valid token and data
  test("PATCH /api/v1/users — Update user with valid token and valid name", async () => {
    const res = await request(API_BASE)
      .patch("/api/v1/users")
      .set("Authorization", `${token}`)
      .send({ name: "UpdatedName" });

    expect(res.statusCode).toBe(statusCodes.success.ok);
  });

  test("PATCH /api/v1/users — Update user with valid token and valid mail", async () => {
    let res = await request(API_BASE)
      .patch("/api/v1/users")
      .set("Authorization", `${token}`)
      .send({ email: "Updated@mail.com" });

    expect(res.statusCode).toBe(statusCodes.success.ok);

    // update token after changing the email
    res = await request(API_BASE).post("/api/v1/auth").send({
      email: "Updated@mail.com",
      password: user.password,
    });
    token = res.body.token;
  });

  test("PATCH /api/v1/users — Update user with valid token and valid password", async () => {
    const res = await request(API_BASE)
      .patch("/api/v1/users")
      .set("Authorization", `${token}`)
      .send({ password: "UpdatedPassword123" });

    expect(res.statusCode).toBe(statusCodes.success.ok);
  });

  test("PATCH /api/v1/users — Update user with no token", async () => {
    const res = await request(API_BASE).patch("/api/v1/users").send({ name: "NoAuth" });

    expect(res.statusCode).toBe(statusCodes.clientError.unauthorized);
  });

  test("PATCH /api/v1/users — Update user data with invalid token", async () => {
    const res = await request(API_BASE)
      .patch("/api/v1/users")
      .set("Authorization", "invalid_token")
      .send({ password: "UpdatedPassword123" });
  });

  test("PATCH /api/v1/users — Update user with invalid body", async () => {
    const res = await request(API_BASE)
      .patch("/api/v1/users")
      .set("Authorization", `${token}`)
      .send({ foobar: "invalid" });

    expect(res.statusCode).toContain(statusCodes.clientError.badRequest);
  });
});
describe("mock-user-auth API - DELETE USER", () => {
  // Route 5: Delete user
  test("DELETE /api/v1/users — should delete user with valid token", async () => {
    let userDelete = generateUser();
    let res = await request(API_BASE).post("/api/v1/users").send(userDelete);

    res = await request(API_BASE).post("/api/v1/auth").send({
      email: userDelete.email,
      password: userDelete.password,
    });

    let tokenDelete = res.body.token;
    res = await request(API_BASE).delete("/api/v1/users").set("Authorization", `${tokenDelete}`);

    expect(res.statusCode).toBe(statusCodes.success.ok);
  });

  test("DELETE /api/v1/users — should reject delete when token missing", async () => {
    const res = await request(API_BASE).delete("/api/v1/users");
    expect(res.statusCode).toBe(statusCodes.clientError.unauthorized);
  });

  test("DELETE /api/v1/users — should reject delete when token invalid", async () => {
    const res = await request(API_BASE).delete("/api/v1/users").set("Authorization", "Bearer invalid_token");

    expect(res.statusCode).toBe(statusCodes.clientError.unauthorized);
  });
});

describe("mock-user-auth API - DELETE ALL USER", () => {
  // Route 6: Delete ALL users
  test("DELETE /api/v1/all-users — Delete All User with no admin key should not delete", async () => {
    const res = await request(API_BASE).delete("/api/v1/all-users").send(testData.deleteAllUsers.emptyAdminKey);
    expect(res.statusCode).toBe(statusCodes.clientError.forbidden);
    expect(res.body).toHaveProperty("message", messages.errors.deleteAllError);
  });

  test("DELETE /api/v1/all-users — Delete All User with wrong admin key should not delete", async () => {
    const res = await request(API_BASE).delete("/api/v1/all-users").send(testData.deleteAllUsers.wrongAdminKey);
    expect(res.statusCode).toBe(statusCodes.clientError.forbidden);
    expect(res.body).toHaveProperty("message", messages.errors.deleteAllError);
  });

  test("DELETE /api/v1/all-users — Delete All User with admin key should pass", async () => {
    const res = await request(API_BASE).delete("/api/v1/all-users").send(testData.deleteAllUsers.corretAdminKey);
    expect(res.statusCode).toBe(statusCodes.success.ok);
    expect(res.body).toHaveProperty("message", messages.success.deleteAllSuccess);
  });
});
