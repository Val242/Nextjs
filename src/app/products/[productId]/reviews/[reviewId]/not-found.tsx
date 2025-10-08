"use client";
/*The above expression is due to the fact that react components are
server components by default and hooks can only be used in client components
. Hence declaring "Use client" alerts the fact we are with a client component*/ 

import { usePathname } from "next/navigation"

export default function NotFound(){
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4]
    return(
        <div>
            <h2>Review {reviewId} not found for product {productId}</h2>
        </div>
    )
}

//The NotFound component does not accept props