import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-semibold">Home</h1>
      <div className="flex items-center justify-between">
        <h1>Snippets</h1>
        <Link href="/snippet/new">
          <Button className="bg-white text-[#1c1c1c] hover:bg-zinc-400 duration-200">Create</Button>
        </Link>
      </div>
    </div>
  );
}
