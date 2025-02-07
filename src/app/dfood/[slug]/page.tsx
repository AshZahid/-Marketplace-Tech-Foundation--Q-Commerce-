import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { groq } from "next-sanity"
import { urlFor } from "@/sanity/lib/image";


// interface Foodprops {
//     params: Promise<{slug: string}>
// }

//  async function FetchProduct(slug: string):Promise<any> {
//     return client.fetch(
//         groq`*[type == "food" && slug.current == $slug][0]
//         {
//           id,
//           name,
//           slug,
//           category,
//           price,
//           originalPrice,
//           tags,
//           description,
//           available,
//           "imageUrl" : image.asset->url
//         }`, {slug}
//         )
//     }

//     export default async function foodpage({params}:Foodprops){
//       const {slug} = await params;
//       const foodprod = await FetchProduct(slug)


//     return(
//         <div>
            //  <div>
//                 {/* hero sec */}
             
          <div>
             <div className="place-content-center text-center w-full h-60 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/bgimg.png")`}}>
//             <div className="text-white font-bold text-3xl">
//                 <h1>Our Shop</h1>
//             </div>
//             <div className="flex gap-2 justify-center mt-2">
//                 <Link href="/" className="text-white">Home</Link>
//                 < FaAngleRight className="text-white mt-1"/>
//                 <Link href="/OurShop" className="text-yellow-600">Shop</Link>
//             </div>
             </div>
           
         </div>


//          {/* dynamic routing */}
             
//          <div className="max-w-7xl mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <Image src={foodprod.image} alt={foodprod} width={400} height={400}/>
//                  <h2 className="font-bold text-2xl ">{foodprod.name}</h2>
//                  <p>{foodprod.price}</p>
//                  <p>{foodprod.description}</p>
//                  <p>{foodprod.tags}</p>
//                  <p>{foodprod.category}</p>
//                  <p>{foodprod.available}</p>
//             </div>

//         </div> 
             
            
            
            
            
            
            
            
            
            
            
//             </div>



//         </div>
//     )
// }
