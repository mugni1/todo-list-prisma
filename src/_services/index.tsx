export async function getTodos() {
  const res = await fetch("http://localhost:3000/api/todos");
  return res.json();
}
