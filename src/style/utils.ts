export const getUserPreference = () => {
  return localStorage.getItem("theme") || "system";
};

export const saveUserPreference = (userPreference: string) => {
  localStorage.setItem("theme", userPreference);
};

export type UserThemeModes = 'light' | 'dark';

export const getUserMode = (): UserThemeModes => {
  const userPreference = getUserPreference();

  if (userPreference === "light") return userPreference;
  if (userPreference === "dark") return userPreference;

  // determine by system
  if (matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
};
