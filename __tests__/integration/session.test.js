const { User } = require("../../src/models");

describe('Authentication', () => {
  it('should receive JWT token when authenticaed with valid credentials', async () => {
    const user = await User.create({
      name: "Eliel",
      email: "eliel@gmail.com",
      password_hash: "123123123"
    });
    expect(user.email).toBe('eliel@gmail.com');
  });
})