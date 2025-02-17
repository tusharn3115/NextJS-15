"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import type { Snippets } from "@prisma/client";
import { Button } from "./ui/button";

const SnippetEditCodeEditor = ({ snippet }: { snippet: Snippets }) => {
  const [code, setCode] = useState(snippet.code);

  return (
    <div>
      <form className="flex items-center justify-between text-white mb-5">
        <h1 className="font-bold text-xl">Your Code Editor</h1>
        <Button
          className="bg-white text-[#1c1c1c] hover:bg-zinc-300 duration-200"
          type="submit"
        >
          Save
        </Button>
      </form>
      
      <Editor 
        height="40vh" 
        defaultLanguage="javascript" 
        defaultValue={code} 
      />
    </div>
  );
};

export default SnippetEditCodeEditor;
