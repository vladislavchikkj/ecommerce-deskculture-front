import { Button } from "@/components/ui/button-lib";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-f h-screen flex items-center justify-center flex-col">
      <h1>Not Found Page</h1>
      <div>Could not find requested resource</div>
      <Link href="/">
        <Button data-hover="Go home" variant="default" className="mt-5">
          Go home
        </Button>
      </Link>
    </div>
  );
}
