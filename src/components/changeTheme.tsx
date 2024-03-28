import Moon from "@/icons/moon";
import Sun from "@/icons/sun";
import { Dispatch, SetStateAction } from "react";

export default function ChangeTheme({
  theme,
  setTheme,
}: {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}) {
  return (
    <button
      className={`${theme == "light" ? "btn" : "btn-dark"} p-2`}
      onClick={() => {
        setTheme(theme == "light" ? "dark" : "light");
      }}
    >
      {theme == "light" ? <Sun /> : <Moon />}
    </button>
  );
}
