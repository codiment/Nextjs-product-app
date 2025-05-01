
import { Card, CardContent } from "@/components/ui/card";
import { ProductForm } from "./product-form";


function ProductsNewPage() {
    return (
        <div className="h-screen flex justify-center items-center">
            <Card>
                <CardContent>
                    <ProductForm />
                </CardContent>
            </Card>
        </div>
    )
}

export default ProductsNewPage;