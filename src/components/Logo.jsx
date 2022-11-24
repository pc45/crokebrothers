import crokeLogo from '@/images/logos/croke-3.gif';
import Image from "next/image";

export function Logo() {
  return (
      <div className="h-20 w-20 relative">
      <Image src={crokeLogo} alt="logo"
             layout="fill" // required
             objectFit="contain" // change to suit your needs
             className="h-6 w-6"/>
      </div>
  )
}
