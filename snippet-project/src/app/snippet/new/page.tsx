import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const CreateNewSnippet = () => {
  async function createSnippet(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await prisma.snippets.create({
      data: {
        title,
        code,
      },
    });

    console.log(snippet);

    redirect("/");
  }

  return (
    <form action={createSnippet} className="text-white">
      <div className="title">
        <Label>Title</Label>
        <Input type="text" name="title" id="title" placeholder="Enter title" />
      </div>

      <div className="code my-5">
        <Label>Code</Label>
        <Textarea name="code" id="code" />
      </div>

      <Button
        type="submit"
        className="bg-white text-[#1c1c1c] hover:bg-zinc-400 duration-200"
      >
        Create Snippet
      </Button>
    </form>
  );
};

export default CreateNewSnippet;
