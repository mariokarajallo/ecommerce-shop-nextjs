import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import Image from "next/image";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl"> Ajustar carrito</span>
            <Link className="underline mb-5" href="/cart">
                Editar carrito
            </Link>

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
{/* disclaimer */}
                <p className="mb-5">
                    <span className="text-xs">
                        Al hacer clic en Colocar Orden, aceptas los <a href="#" className="underline">Términos y Condiciones</a> de la tienda.
                    </span>
                </p>
              <Link
                href="/orders/123"
                className="flex btn-primary justify-center"
              >
                Colocar Orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
