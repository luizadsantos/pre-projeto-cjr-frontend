export default function showError(error: unknown) {
  if (error instanceof Error) console.log(error.message);
  else console.log(error);
}
