'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { createProduct } from "../products.api";
import { useRouter } from "next/navigation";

export function ProductForm() {

    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = handleSubmit(async data => {
        console.log(data);
        await createProduct({
            ...data,
           price: parseFloat(data.price)
        });
        router.push('/');
    })

    return (
        <form onSubmit={onSubmit}>
            <Label>
                Product Name
            </Label>
            <Input {...register('name')} />
            <Label>
                Description
            </Label>
            <Input {...register('description')} />
            <Label>
                Price
            </Label>
            <Input {...register('price')} />
            <Label>
                Image
            </Label>
            <Input {...register('image')} />
            <div className="pt-3">
                <Button>
                    Create Product
                </Button>
            </div>
        </form>
    )


}