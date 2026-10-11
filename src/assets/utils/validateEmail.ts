export function validateEmail(email: string): string | null {
  if (email.trim() === "") {
    return "Email can't be empty";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return "Please insert a valid email address";
  }

  return null;
}
