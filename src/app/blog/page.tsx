import { resolve } from "path"

export default async function Blog(){
    await new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve("Intentional Delay")
        },2000)

        });
    return <h1>My Blog</h1>
}