"use client";
import Button from "@/components/common/Button";

export default function Home() {

  return (
    <main className="flex justify-center items-center h-screen">
      <Button label="Click Me" onClick={()=> alert("Clicked")} />
    </main>
  );
}