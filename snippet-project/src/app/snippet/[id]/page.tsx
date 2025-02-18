import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import * as action from "@/action"
import { notFound } from "next/navigation";

const SnippetDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippets.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) if (!snippet) notFound();

  const deleteSnippetAction = action.deleteSnippet.bind(null, snippet.id);

  return (
    <div className="text-white flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">{snippet?.title}</h1>
        <div className="flex items-center gap-4">
          <Link href={`/snippet/${snippet?.id}/edit`}>
            <Button className="bg-white text-[#1c1c1c] hover:bg-zinc-300 duration-200">
              Edit
            </Button>
          </Link>
          <form action={deleteSnippetAction}>
           <Button type="submit" variant={"destructive"}>Delete</Button>
          </form>
        </div>
      </div>
      <pre className="p-3 bg-gray-600 rounded-md">
        <code>{snippet?.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailsPage;
