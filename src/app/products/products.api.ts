export async function getProducts() {
    const res = await fetch('http://localhost:4000/api/products',{
        cache: 'no-store'
    })
    return await res.json()
}


export async function createProduct(productData: any) {
    const res = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    })
    const data = await res.json()
    console.log(data)
}