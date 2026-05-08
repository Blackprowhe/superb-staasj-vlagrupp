import { describe, it, expect } from "vitest";
import { getPasswordStrength } from "./validator";

describe("password strength", () => {
  it("returns weak for short passwords", () => {
    expect(getPasswordStrength("abc")).toBe("weak");
  });

  it("returns okay for medium passwords", () => {
    expect(getPasswordStrength("abcdefghijk")).toBe("okay");
  });

  it("returns strong for long passwords", () => {
    expect(getPasswordStrength("abcdefghijklmnop")).toBe("strong");
  });
});