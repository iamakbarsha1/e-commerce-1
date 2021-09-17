import Head from "next/head"
import Banner from './Components/Banner';
import Categories from './Components/Categories';
import Header from './Components/Header';
import PopularDeals from './Components/PopularDeals';
import SideBar from './Components/SideBar';

export default function Home({ popularData }) {

  console.log(popularData);


  return (

    <>
      <div>
        <Head>
          <title>Online eCommerce</title>
        </Head>
      </div>

      <main className="min-h-screen antialiased">
        <div>
          <Header />
        </div>

        <section className="lg:flex relative">
          <div className="absolute lg:relative hidden lg:block z-10  h-screen">
            <SideBar />
          </div>

          <div className="">
            <div className=" md:justify-center lg:float-left">
              <Categories />
            </div>

            <div className="">
              <Banner />
            </div>

            <div>
              <div className="px-4 text-2xl">
                Popular Deals
              </div>
              <div className="flex space-x-3 overflow-scroll scrollbar-hide">
                {popularData?.map(({ img, name, price }) => (
                  <PopularDeals
                    key={img}
                    img={img}
                    name={name}
                    price={price}
                  />
                ))}

              </div>

            </div>

          </div>




        </section>


      </main>
    </>

  )
}

export async function getStaticProps() {
  const popularData = await fetch("https://jsonkeeper.com/b/2YX2").then(
    res => res.json()
  );

  return {
    props: {
      popularData,
    },
  };
}
// https://jsonkeeper.com/b/2YX2
// https://jsonkeeper.com/b/TBP2