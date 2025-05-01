import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { getProducts } from "./products/products.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const dinamic = 'force-dynamic';

async function HomePage() {

  const products = await getProducts();
  console.log(products)

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">NextNestApp</h1>

        <Link href='/products/new' className={buttonVariants()}>
          Create Product
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {
          products.map((product: { id: number, name: string, description: string, price: number, image: string }) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle className="flex justify-between">
                  {product.name}
                  <span className="text-sm font-bold text-gray-500">
                    {product.price}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img src={product.image} alt="" />
                <p>{product.description}</p>
                <Button>
                  Buy
                </Button>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </>
  );
}

export default HomePage;