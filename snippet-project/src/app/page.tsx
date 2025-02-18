import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippets.findMany();

  return (
    <div className="text-white">
      <div className="flex items-center justify-between">
        <h1>Snippets</h1>
        <Link href="/snippet/new">
          <Button className="bg-white text-[#1c1c1c] hover:bg-zinc-400 duration-200">
            Create
          </Button>
        </Link>
      </div>

      {snippets.map((snippet) => (
        <div key={snippet.id} className="flex items-center justify-between bg-zinc-400 p-2 rounded-md mt-5">
          <h1>{snippet.title}</h1>
          <Link href={`/snippet/${snippet.id}`}>
            <Button>View</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
