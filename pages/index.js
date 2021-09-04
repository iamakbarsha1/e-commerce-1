import Banner from './Components/Banner';
import Categories from './Components/Categories';
import Header from './Components/Header';
import Products from './Components/Products';
import SideBar from './Components/SideBar';

export default function Home() {
  return (

    <main className="min-h-screen antialiased">

      <div>
        <Header />
      </div>


      <section className="lg:flex relative">


        <div className="absolute lg:relative hidden lg:block z-10  h-screen">
          <SideBar />
        </div>

        <div className="flex-grow">
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
