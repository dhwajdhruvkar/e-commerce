import React from "react";
import { useAppContext } from "../Context/AppContext";

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity } = useAppContext();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <table className="w-full mb-6">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Product</th>
            <th className="text-left py-2">Price</th>
            <th className="text-left py-2">Quantity</th>
            <th className="text-left py-2">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2 flex items-center gap-2">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                <span>{item.title}</span>
              </td>
              <td className="py-2">${item.price.toFixed(2)}</td>
              <td className="py-2">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => updateCartQuantity(item.id, Number(e.target.value))}
                  className="w-16 border rounded px-2 py-1 text-sm"
                />
              </td>
              <td className="py-2">${(item.price * item.quantity).toFixed(2)}</td>
              <td className="py-2">
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right text-xl font-semibold">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
}