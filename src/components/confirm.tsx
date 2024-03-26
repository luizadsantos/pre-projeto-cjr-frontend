import { Dispatch, SetStateAction } from "react";

export default function Confirm({
  message,
  execute,
  setShow,
}: {
  message: string;
  execute: () => void;
  setShow: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed left-0 top-0 w-full flex items-center justify-center h-full overflow-hidden bg-opacity-40 bg-black">
      <div className="flex flex-col gap-4 p-4 rounded-lg items-center opacity-100 w-2/3 bg-neutral">
        <h1 className="text-4xl font-bold text-center">{message}</h1>
        <div className="flex gap-4">
          <button
            onClick={() => {
              execute();
              setShow(false);
            }}
            className="border-2 border-black rounded-lg px-4 py-1 hover:bg-primary font-bold"
          >
            Yes
          </button>
          <button
            onClick={() => {
              setShow(false);
            }}
            className="border-2 border-black rounded-lg px-4 py-1 hover:bg-primary font-bold"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
