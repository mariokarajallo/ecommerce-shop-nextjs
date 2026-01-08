'use client';
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useState } from "react";

interface Props {
    quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {

    const [count, setCount] = useState(quantity);

    const onQuantityChange = (newQuantity: number) => {
        if (count + newQuantity < 1) return;
        setCount(count + newQuantity);
    }

  return (
    <div className="flex">
        <button disabled={count === 1} onClick={() => onQuantityChange(-1)}><IoRemoveCircleOutline size={30}/></button>
        <span className="w-10. mx-3 px-5 bg-gray-100 rounded">{count}</span>
        <button disabled={count === quantity} onClick={() => onQuantityChange(+1)}><IoAddCircleOutline size={30}/></button>
    </div>
  )
}
