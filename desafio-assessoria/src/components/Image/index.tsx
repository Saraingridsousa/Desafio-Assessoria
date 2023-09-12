import { Stack } from "@chakra-ui/react";
import NextImage from 'next/image'

interface ImagesProps{
    w?: string
    align?: string
    src: string
    alt: string
    width: number
    height:number
}

export function Images({w,src,alt,width,height, align}:ImagesProps){
    return(
        <Stack
            as="picture"
            w={w}
            align={align}
        >
        <NextImage src={src} alt={alt} width={width} height={height}/>
        </Stack>
    )
}