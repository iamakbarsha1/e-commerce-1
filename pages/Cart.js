import { useRouter } from "next/dist/client/router"
import Header from "./Components/Header"
import SideBar from "./Components/SideBar";

function Cart() {

   // useRouter();
   const router = useRouter();

   const cart = () => {
      router.push({
         pathname: "/cart"
      });
   }

   return (
      <div>
         <main>
            <Header />
         </main>

         <section>
            <SideBar />
         </section>


      </div>
   )
}

export default Cart
