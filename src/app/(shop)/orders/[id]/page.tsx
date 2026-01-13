import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
    params: {
        id: string;
    }
}

export default async function OrdersIdPage({ params }: Props) {

    const { id } = await params;

    // TODO: verificar usuario 
    // TODO: redirect(/) a alguna pantalla si no es usuario registrado

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* carrito */}
          <div className="flex flex-col mt-5">
            <div className={
                clsx(
                    " flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                        
                    {
                        'bg-red-500':true,
                        'bg-green-700':false
                    }
                )
            } >
            <IoCardOutline size={30}/>
            <span className="mx-2"> Pendiente</span>
            

            </div>

            {/* Items del carrito */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex my-2">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="mr-5 rounded"
                />
                <div>
                  <p>{product.title}</p>
                  <p>$ {product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          {/* checkout - resumen de la orden */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            {/* Dirrecion de entrega */}
            <h2 className="text-2xl mb-2 font-bold">Dirrecion de entrega</h2>
            <div className="mb-10">
              <p className="font-bold text-xl">Mario Karajallo</p>
              <p>Costa Rica</p>
              <p>123456789</p>
              <p>123456789</p>
              <p>123456789</p>
              <p>123456789</p>
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"/>

            {/* Resumen de la orden */}
            <h2 className="text-2xl mb-2 font-bold"> Resumen de la orden</h2>
            <div className="grid grid-cols-2">
              <span>Num de items</span>
              <span className="text-right">{productsInCart.length}</span>

              <span>Subtotal</span>
              <span className="text-right">
                ${" "}
                {productsInCart.reduce(
                  (acc, product) => acc + product.price,
                  0
                )}
              </span>

              <span>Impuestos (15%)</span>
              <span className="text-right">
                ${" "}
                {productsInCart.reduce(
                  (acc, product) => acc + product.price,
                  0
                ) * 0.15}
              </span>

              <span className="mt-5 font-bold text-xl">Total</span>
              <span className="mt-5 text-right font-bold text-xl">
                ${" "}
                {productsInCart.reduce(
                  (acc, product) => acc + product.price,
                  0
                ) +
                  productsInCart.reduce(
                    (acc, product) => acc + product.price,
                    0
                  ) *
                    0.15}
              </span>
            </div>

            <div className="mt-5 mb-5 w-full">

                <div className={
                clsx(
                    " flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                        
                    {
                        'bg-red-500':true,
                        'bg-green-700':false
                    }
                )
            } >
            <IoCardOutline size={30}/>
            <span className="mx-2"> Pendiente</span>
            

            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
