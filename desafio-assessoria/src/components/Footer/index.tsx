import { HStack, Stack } from "@chakra-ui/react";
import { Image } from "../Image"

export function Footer(){
    return(
        <HStack>
            <Stack>
            <Image src={"/Logo.png"} alt={"Logo"} width={115} height={80}/>
            </Stack>
        </HStack>
    )
}