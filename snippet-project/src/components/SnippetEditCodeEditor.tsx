"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import type { Snippets } from "@prisma/client";
import { Button } from "./ui/button";
import { saveSnippet } from "@/action"

const SnippetEditCodeEditor = ({ snippet }: { snippet: Snippets }) => {
  const [code, setCode] = useState(snippet.code);

  const changeEventHandler = (value:string = "") => {
    setCode(value)
  }

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code)

  return (
    <div>
      <form action={saveSnippetAction} className="flex items-center justify-between text-white mb-5">
        <h1 className="font-bold text-xl">Your Code Editor</h1>
        <Button
          className="bg-white text-[#1c1c1c] hover:bg-zinc-300 duration-200"
          type="submit"
        >
          Save
        </Button>
      </form>
      
      <Editor 
        height="70vh" 
        defaultLanguage="javascript" 
        defaultValue={code} 
        onChange={changeEventHandler}
      />
    </div>
  );
};

export default SnippetEditCodeEditor;
