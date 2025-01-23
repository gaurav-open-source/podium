import type { HTTPValidationError } from "$lib/client/types.gen";
import { toast } from "svelte-sonner";

type ErrorWithDetail = {
  detail: string;
};

export function handleError(
  error: HTTPValidationError | ErrorWithDetail | Error | unknown,
) {
  // If it's a FastAPI HTTPException, it will have a detail field. Same with validation errors.
  console.error("Error", error);
  if (error && typeof error === "object" && "detail" in error) {
    if (Array.isArray(error?.detail)) {
      // const invalidFields = error.detail.map((e) => e.msg);
      const invalidFields = error.detail.map(
        (e) => `${e.loc.join(".")}: ${e.msg}`,
      );
      toast(invalidFields.join(" | "));
    } else if (typeof error?.detail === "string") {
      toast(error.detail);
    }
  } else {
    if (error instanceof Error) {
      toast(error.message);
    } else {
      toast("An error occurred, check the console for more details");
    }
  }
}

export function setSystemTheme() {
  // If the user has set a theme preference, don't override it
  if (localStorage.theme) {
    return;
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
