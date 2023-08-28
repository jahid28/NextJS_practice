import { error } from "console"
import Link from "next/link"

export default function About() {
    // throw new Error('lol')
  return (
    <div>
        <h2 className="h2">about</h2>
        <Link href="/" >Home</Link>
    </div>
  )
}
