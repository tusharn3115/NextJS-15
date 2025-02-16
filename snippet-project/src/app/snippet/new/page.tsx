import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const CreateNewSnippet = () => {
  return (
    <form className="text-white">
      <div className="title">
        <Label>Title</Label>
        <Input type="text" name="title" id="title" placeholder="Enter title" />
      </div>

      <div className="code my-5">
        <Label>Code</Label>
        <Textarea name="codearea" id="codearea" />
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
