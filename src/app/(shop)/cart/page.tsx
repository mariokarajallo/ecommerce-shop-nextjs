import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import Image from "next/image";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito de compras" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl"> Agregar más items</span>
            <Link className="underline mb-5" href="/">
              Continuar comprando
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
                  <p>$ {product.price}</p>
                  <QuantitySelector quantity={3} />

                  <button className="underline mt-3">Remover</button>
                </div>
              </div>
            ))}
          </div>

          {/* checkout - resumen de la orden */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2"> Resumen de la orden</h2>
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
              <Link
                href="/checkout/address"
                className="flex btn-primary justify-center"
              >
                Proceder al pago
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
