import { validateEmail, validatePassword } from "utils/utils";

describe("validateEmail", () => {
  it("should return true for valid email", () => {
    const result = validateEmail("test@test.com");
    expect(result).toBe(true);
  });

  it("should return false for invalid email", () => {
    const result = validateEmail("test");
    expect(result).toBe(false);
  });

  it("should return false for empty email", () => {
    const result = validateEmail("");
    expect(result).toBe(false);
  });

  it("should return true for valid password", () => {
    const result = validatePassword("123456");
    expect(result).toBe(true);
  });

  it("should return false for invalid password", () => {
    const result = validatePassword("12345");
    expect(result).toBe(false);
  });

  it("should return false for empty password", () => {
    const result = validatePassword("");
    expect(result).toBe(false);
  });
});
