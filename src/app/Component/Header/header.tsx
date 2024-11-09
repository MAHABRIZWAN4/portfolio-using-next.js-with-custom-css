import Link from "next/link"

import Image from "next/image"

export default function Header(){
  return (
    <nav>

      <div id="Header">

      <div>
<Image src="/logo.png" alt="logo" width={100} height={100} id="logo" ></Image>
</div>


      <div id="Link">
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/contact-us"><li>Contact-Me</li></Link>
        </ul>
      </div>


      </div>
    </nav>
  )
}