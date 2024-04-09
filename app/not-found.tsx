import { Button } from "@/components/ui/button-lib";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-f h-screen flex items-center justify-center flex-col bg-gray-100">
      <h1 className="font-bold">Not Found Page</h1>
      <div className=" font-medium">Could not find requested resource</div>
      <Link href="/">
        <Button
          data-hover="Go home"
          variant="outline"
          className="mt-5 bg-black text-white">
          Go home
        </Button>
      </Link>
    </div>
  );
}
