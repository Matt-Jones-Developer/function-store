import itemData from '../../data/inventory.json';
import ItemCard from './ItemCard';

// interface ItemProps {}

export default function ItemWrapper() {
  return (
    <div className='p-4 m-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
      {itemData.map((item, i) => (
        <div key={`card-${i}`} className='w-full mx-auto'>
          <ItemCard index={i} {...item} price={Number(item.price)} />
        </div>
      ))}
    </div>
  );
}
