import { prisma } from "@/lib/prisma";
import React from "react";

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

  if(!snippet) <h1 className="text-sm text-red-500 text-center">Snippet not found</h1>

  return <div></div>;
};

export default SnippetDetailsPage;
