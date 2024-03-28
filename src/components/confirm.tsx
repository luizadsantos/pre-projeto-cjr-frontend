import { Dispatch, SetStateAction } from "react";

export default function Confirm({
  theme,
  message,
  execute,
  setShow,
}: {
  theme: "light" | "dark";
  message: string;
  execute: () => void;
  setShow: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`fixed left-0 top-0 w-full flex items-center justify-center h-full overflow-hidden bg-opacity-40 ${
        theme == "light" ? "bg-black" : "bg-neutral"
      }`}
    >
      <div
        className={`flex flex-col gap-4 p-4 rounded-lg items-center opacity-100 w-2/3 ${
          theme == "light" ? "bg-neutral" : "bg-black"
        }`}
      >
        <h1 className="text-4xl font-bold text-center">{message}</h1>
        <div className="flex gap-4">
          <button
            onClick={() => {
              execute();
              setShow(false);
            }}
            className={`border-2 rounded-lg px-4 py-1 font-bold ${
              theme == "light"
                ? "hover:bg-primary border-black"
                : "hover:bg-gray-800 border-neutral"
            }`}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setShow(false);
            }}
            className={`border-2 rounded-lg px-4 py-1 ${
              theme == "light"
                ? "hover:bg-primary border-black"
                : "hover:bg-gray-800 border-neutral"
            } font-bold`}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
