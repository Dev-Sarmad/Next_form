import { useRouter } from "next/router";

export default function Success (){
    const router = useRouter();
    return(
        <main className="h-screen flex items-center justify-center">
            <div  className="bg-red-500 rounded-lg w-1/2 p-20  ">
            <h1> Wellcome Communist ,{router.query.name}</h1>
            </div>
        </main>
    )
}