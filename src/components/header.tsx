export default function Header() {
  return (
    <header className="flex justify-between p-8 py-6 font-bold bg-black">
      <h1 className="text-3xl text-white">To-Do list</h1>

      <button className="rounded-lg bg-white p-2">Create task</button>
    </header>
  );
}
