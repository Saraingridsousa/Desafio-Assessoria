import { Stack } from "@chakra-ui/react";
import NextImage from 'next/image'

interface ImageProps{
    w?: string
    align?: string
    src: string
    alt: string
    width: number
    height:number
}

export function Image({w,src,alt,width,height, align}:ImageProps){
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