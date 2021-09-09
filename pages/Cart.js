import { useRouter } from "next/dist/client/router"
import Header from "./Components/Header"

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
      </div>
   )
}

export default Cart
