import type { Metadata } from "next"

export const metadata: Metadata = {
    title:'SIO Title',
    description:'SIO Description',
    keywords:['Contact Page','Ariana', 'entrevista']
}
export default function ContactPage(){
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}