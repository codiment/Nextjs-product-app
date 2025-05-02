
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ProductForm } from "./product-form";
import { getProduct } from "../products.api";

interface Props {
    params: {
        id: string
    }
}

async function ProductsNewPage({ params } : Props ) {
    const product = params.id ? await getProduct(params.id) : null;


    return (
        <div className="h-screen flex justify-center items-center">
            <Card>
                <CardContent>
                    <ProductForm product={product}/>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProductsNewPage;