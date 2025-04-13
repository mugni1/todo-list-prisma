export async function getTodos(status?: string) {
  const fetchURL =
    status == "done"
      ? "http://localhost:3000/api/todos?status=done"
      : "http://localhost:3000/api/todos";
  const res = await fetch(fetchURL);
  return res.json();
}
