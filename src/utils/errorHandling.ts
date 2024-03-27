export function showError(error: unknown) {
  if (error instanceof Error) console.log(error.message);
  else console.log(error);
}

export function throwError(response: {
  status: number;
  error?: string;
  message?: string;
}) {
  if (!(response.status == 200 || response.status == 201))
    throw new Error(
      response.error && response.message
        ? response.status + ": " + response.error + "\n" + response.message
        : "Failed to access database",
    );
}
