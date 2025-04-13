const baseURL = process.env.NEXT_PUBLIC_BASE_URL_APP;

export async function getTodos(status?: string) {
  const fetchURL =
    status == "done"
      ? baseURL + "/api/todos?status=done"
      : baseURL + "/api/todos";
  const res = await fetch(fetchURL);
  return res.json();
}
