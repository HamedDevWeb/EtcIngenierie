import Image from "next/image"
import Link from "next/link.js"
const postCard = () => {
  return (
    <div className="flex flex-col gap-[20px] mb-[20px]">
        <div className="flex ">
            <div className="w-[90%] h-[400px] relative">
                <Image src="/blog1.jpg" alt="logo" fill className="object-cover" />
            </div>
        </div>
        <div>
            <h1>Title</h1>
            <p>description</p>
            <Link href="/blog/post">Lire la suite</Link>
        </div>
    </div>
  )
}

export default postCard