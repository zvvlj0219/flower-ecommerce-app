// view
import Header from './view/Header/Header'
import ProductsList from './view/Product/ProductsList'

const App = () => {
  return (
    <div>
      <Header />
      <div>ここにスライダー</div>
      <div>
        <ProductsList />
      </div>
      <div>ここに説明と写真</div>
      <div>フッター</div>
      <hr />
      <div>
        <p>product add form</p>
        <p>name</p>
        <p>description</p>
        <p>price</p>
        <p>count in stock</p>
        <p>image url</p>
      </div>
    </div>
  )
}

export default App
