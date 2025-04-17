import Navbar from "@/app/components/Navbar"


export default function Layout( { children }: Readonly<{ children: React.ReactNode}>) {
    return (
        <main className="fond-work-sans">
               
       <Navbar />
               
               { children }
        </main>
    )
}