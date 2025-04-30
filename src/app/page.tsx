import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

function HomePage() {
  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-bold">NextNestApp</h1>

      <Link href='/products/new' className={buttonVariants()}>
        Create Product
      </Link>
    </div>
  );
}

export default HomePage;