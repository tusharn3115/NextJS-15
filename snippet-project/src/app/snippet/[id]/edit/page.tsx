import SnippetEditCodeEditor from "@/components/SnippetEditCodeEditor";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import React from "react";

const EditSnippet = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {

    const id = parseInt((await params).id);

    await new Promise((r) => setTimeout(r, 1000));

    const snippet = await prisma.snippets.findUnique({
        where: {
          id
        }
    })

    if (!snippet) notFound();

  return (
    <div>
      <SnippetEditCodeEditor snippet={snippet} />
    </div>
  );
};

export default EditSnippet;
