import Item from './item'

export default function ItemContainer({list}){
     
    //const allItems = list.map(product => <Item price={product.price} isAvailable={product.isAvailable} logo={product.logo} name={product.name} />)
    const allItems = list.map(person => <Item {...person}/>)

    return (
        <main className="App-main">
          {allItems}
        </main>
    )
  }