export function getPasswordStrength(password: string): string {
  if (password.length < 10) {
    return "weak";
  }

  if (password.length < 16) {
    return "okay";
  }

  return "strong";
}