import { useState } from 'react';
// a very rough cart page design -
// due to time constraints and issues with mapped pages I did not manage to link this up
type CartItem = {
  name: string;
  quantity: number;
  price: number;
};

type CartItems = CartItem[];

// Define the cartItems array
const cartItems = [
  { id: 1, name: 'Product 1', quantity: 2, price: 10.99 },
  { id: 2, name: 'Product 2', quantity: 1, price: 5.99 },
  { id: 3, name: 'Product 3', quantity: 3, price: 7.99 },
];

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [itemName, setItemName] = useState<string>('');
  const [itemQuantity, setItemQuantity] = useState<number>(0);
  const [itemPrice, setItemPrice] = useState<number>(0);

  const addItem = (event: React.FormEvent) => {
    event.preventDefault();
    const newItem: CartItem = {
      name: itemName,
      quantity: itemQuantity,
      price: itemPrice,
    };
    setItems([...items, newItem]);
    setItemName('');
    setItemQuantity(0);
    setItemPrice(0);
  };

  const removeItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const calculateTotal = () => {
    const subtotal = items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    const tax = subtotal * 0.1;
    const shipping = items.length > 0 ? 5 : 0;
    return subtotal + tax + shipping;
  };

  const shipping = 4.99;
  const subTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const tax = subTotal * 0.1;
  const total = subTotal + tax + shipping;

  return (
    <div className='mx-auto max-w-lg'>
      <h1 className='text-2xl font-bold mb-4'>Your Cart</h1>
      <form onSubmit={addItem}>
        <div className='flex items-center mb-2'>
          <label htmlFor='item-name' className='w-24 mr-2'>
            Item Name:
          </label>
          <input
            id='item-name'
            type='text'
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className='border rounded py-1 px-2 flex-grow'
          />
        </div>
        <div className='flex items-center mb-2'>
          <label htmlFor='item-quantity' className='w-24 mr-2'>
            Quantity:
          </label>
          <input
            id='item-quantity'
            type='number'
            value={itemQuantity}
            onChange={(e) => setItemQuantity(parseInt(e.target.value))}
            className='border rounded py-1 px-2 w-20'
          />
        </div>
        <div className='flex items-center mb-2'>
          <label htmlFor='item-price' className='w-24 mr-2'>
            Price:
          </label>
          <input
            id='item-price'
            type='number'
            step='0.01'
            value={itemPrice}
            onChange={(e) => setItemPrice(parseFloat(e.target.value))}
            className='border rounded py-1 px-2 w-32'
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white rounded py-1 px-4'
        >
          Add Item
        </button>
      </form>
      <table className='mt-4 w-full table-auto'>
        <thead>
          <tr>
            <th className='px-4 py-2'>#</th>
            <th className='px-4 py-2'>Item</th>
            <th className='px-4 py-2'>Quantity</th>
            <th className='px-4 py-2'>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.id}>
              <td className='border px-4 py-2'>{index + 1}</td>
              <td className='border px-4 py-2'>{item.name}</td>
              <td className='border px-4 py-2'>{item.quantity}</td>
              <td className='border px-4 py-2'>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-between items-center w-2/3 mt-4'>
        <div className='flex flex-col justify-center items-center'>
          <label className='text-gray-500'>Subtotal</label>
          <div className='font-semibold'>${subTotal.toFixed(2)}</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <label className='text-gray-500'>Tax</label>
          <div className='font-semibold'>${tax.toFixed(2)}</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <label className='text-gray-500'>Shipping</label>
          <div className='font-semibold'>${shipping.toFixed(2)}</div>
        </div>
      </div>
      <div className='font-bold text-2xl my-4'>Total: ${total.toFixed(2)}</div>
    </div>
  );
}
