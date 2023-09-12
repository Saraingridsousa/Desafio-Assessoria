import { Link } from "@chakra-ui/react";
import NextLink from 'next/link'
import { Images } from "../Image";

interface LinkNavbarProps{
    href: any
    text: string
}

export function LinkNavbar({href, text}:LinkNavbarProps){
    return(

        <Link
            as={NextLink}
            href={href}
            color={"darkpink"}
            fontWeight={400}
            fontSize={"20px"}
        >
         {text}
        </Link>
    )
}

interface LinkIconProps{
    href: string
    src: string
    alt: string
    width: number
    height: number

}

export function LinkIcon({href,src,alt,width,height}:LinkIconProps){
    return(
        <>
        <Link as={NextLink} href={href} >
            <Images src={src} alt={alt} width={width} height={height}/>
        </Link>
        </>
    )
}