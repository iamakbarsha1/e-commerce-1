import Banner from './Components/Banner';
import Categories from './Components/Categories';
import Header from './Components/Header';

export default function Home() {
  return (

    <div>

      <div>
        <Header />
      </div>

      <div className="md:flex md:justify-center">
        <Categories />
      </div>

      <div>
        <Banner />
      </div>



    </div>

  )
}
