import type { Metadata } from "next"

export const metadata: Metadata = {
    title:'SAO Title',
    description:'SAO Description',
    keywords:['Pricing Page','Ariana', 'dialogo']
}
export default function PricingPage(){
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}