export default function Header() {
  return (
    <header className="flex items-center justify-between p-8 py-6 font-bold bg-primary">
      <h1 className="text-3xl text-neutral">To-Do list</h1>

      <button className="rounded-lg bg-neutral border-2 border-black hover:bg-primary hover:text-neutral p-2">
        Create task
      </button>
    </header>
  );
}
