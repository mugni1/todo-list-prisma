import FormCreateTodo from "@/_components/FormCreateTodo";
import ListTodo from "@/_components/ListTodo";

export default function Home() {
  return (
    <section className="min-h-screen container mx-auto p-5">
      <h1 className="text-xl md:text-2xl font-extrabold text-center">
        MY TODO LIST
      </h1>
      <FormCreateTodo />
      <ListTodo />
    </section>
  );
}
