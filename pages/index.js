import Banner from './Components/Banner';
import Categories from './Components/Categories';
import Header from './Components/Header';
import Products from './Components/Products';
import SideBar from './Components/SideBar';

export default function Home() {
  return (

    <main>

      <div>
        <Header />
      </div>


      <section className="flex ">

        <div className="hidden lg:block">
          <SideBar />
        </div>

        <div>
          <div className="md:flex md:justify-center lg:float-left">
            <Categories />
          </div>

          <div>
            <Banner />
          </div>


          <div className="px-4 text-2xl">
            Fruits
          </div>


          <Products />
        </div>


      </section>


    </main>

  )
}
