// checks an email string and returns an error message,
// or null if the email looks fine
export function validateEmail(email: string): string | null {
  if (email.trim() === "") {
    return "Email can't be empty";
  }

  // simple check: something@something.something
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return "Please insert a valid email address";
  }

  return null;
}
