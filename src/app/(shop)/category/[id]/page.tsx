import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { Category } from "@/interfaces/product.interface";

const seeProducts = initialData.products;

interface Props {
    params: {
        id: Category
    }
}

export default async function CategoryPage({ params }: Props) {

    const {id} = await params;

    const productsByGender = seeProducts.filter(product => product.gender === id);

const labels: Record<Category, string> ={
    'men': 'para Hombres',
    'women': 'para Mujeres',
    'kid': ' para Niños',
    'unisex': 'para todos'
}
    // if ( id === 'kids') {
    //  notFound();   
    // }

    return (
         <>
              <Title title={`Articulos de ${labels[id]}`} subtitle='Todos los productos' className="mb-2" />
              <ProductGrid products={productsByGender} />
            </>
    )
}