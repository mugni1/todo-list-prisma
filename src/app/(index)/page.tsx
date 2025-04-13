import FormCreateTodo from "@/_components/FormCreateTodo";
import ListTodo from "@/_components/ListTodo";
import ProgressAndDone from "@/_components/ProgressAndDoneBtn";
import { getTodos } from "@/_services";
import type { Todo } from "@/generated/prisma";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ status: string }>;
}) {
  const { status } = await searchParams;
  const { data }: { data: Todo[] } = await getTodos(status);
  return (
    <section className="min-h-screen container mx-auto p-5">
      <h1 className="text-xl md:text-2xl font-extrabold text-center mb-3">
        MY TODO LIST
      </h1>
      <FormCreateTodo />
      <ProgressAndDone />
      <ListTodo todos={data} />
    </section>
  );
}
