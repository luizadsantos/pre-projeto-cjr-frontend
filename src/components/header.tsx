export default function Header() {
  return (
    <header className="flex items-center justify-between p-8 py-6 font-bold bg-primary">
      <h1 className="text-3xl text-neutral">To-Do list</h1>

      <button className="btn p-2">Create task</button>
    </header>
  );
}
