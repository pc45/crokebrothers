import crokeLogo from '@/images/logos/croke-icon.svg'
import Image from "next/image";

export function Logo() {
  return (
      <div className="h-24 w-24 relative">
      <Image src={crokeLogo} alt="logo"
             layout="fill" // required
             objectFit="contain" // change to suit your needs
             className="h-8 w-8"/>
      </div>
  )
}
