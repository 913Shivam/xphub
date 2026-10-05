const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EXPERIENCE_IDS = ["startup", "funding", "product", "team", "crisis"];
const AVAILABILITY_IDS = ["weekly", "evenings", "custom"];
const MAX_PROFILE_PICTURE_SIZE = 5 * 1024 * 1024;
const ALLOWED_PROFILE_PICTURE_TYPES = ["image/jpeg", "image/png"];

export function validateRequired(value, label) {
  return typeof value === "string" && value.trim()
    ? null
    : `${label} is required.`;
}

export function validateName(value, label) {
  const requiredError = validateRequired(value, label);
  if (requiredError) return requiredError;

  if (value.trim().length > 80) {
    return `${label} must be 80 characters or fewer.`;
  }

  return null;
}

export function validateEmail(value) {
  const requiredError = validateRequired(value, "Email");
  if (requiredError) return requiredError;

  const email = value.trim();
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return "Enter a valid email address.";
  }

  return null;
}

export function validatePassword(value) {
  const requiredError = validateRequired(value, "Password");
  if (requiredError) return requiredError;

  if (value.length < 8) {
    return "Password must be at least 8 characters.";
  }

  return null;
}

export function validateProfilePicture(file) {
  if (!file) return "Profile picture is required.";
  if (!ALLOWED_PROFILE_PICTURE_TYPES.includes(file.type)) {
    return "Choose a JPEG or PNG image.";
  }
  if (file.size > MAX_PROFILE_PICTURE_SIZE) {
    return "Profile picture must be 5 MB or smaller.";
  }

  return null;
}

export function validateLoginForm({ email, password }) {
  return {
    email: validateEmail(email),
    password: validatePassword(password),
  };
}

export function validateSignupForm({
  firstName,
  lastName,
  email,
  password,
  termsAccepted,
}) {
  return {
    firstName: validateName(firstName, "First name"),
    lastName: validateName(lastName, "Last name"),
    email: validateEmail(email),
    password: validatePassword(password),
    termsAccepted: termsAccepted ? null : "Accept the Terms of Service to continue.",
  };
}

export function validateOnboardingStep(step, data) {
  switch (step) {
    case 1:
      return {
        firstName: validateName(data.firstName, "First name"),
        lastName: validateName(data.lastName, "Last name"),
        location: validateRequired(data.location, "Location"),
        headline: validateRequired(data.headline, "Professional headline"),
        profilePicture: validateProfilePicture(data.profilePicture),
      };
    case 2:
      return {
        jobTitle: validateRequired(data.jobTitle, "Job title"),
        company: validateRequired(data.company, "Company"),
        industry: validateRequired(data.industry, "Industry"),
        yearsExperience: validateRequired(
          data.yearsExperience,
          "Years of experience",
        ),
      };
    case 3:
      return {
        experiences:
          Array.isArray(data.experiences) &&
          data.experiences.some((experience) =>
            EXPERIENCE_IDS.includes(experience),
          )
            ? null
            : "Select at least one experience to continue.",
      };
    case 4:
      return {
        availability: AVAILABILITY_IDS.includes(data.availability)
          ? null
          : "Choose an availability option to continue.",
      };
    default:
      return {};
  }
}

export function hasValidationErrors(errors) {
  return Object.values(errors).some(Boolean);
}
