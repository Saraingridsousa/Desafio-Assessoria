import { HStack, Stack } from "@chakra-ui/react";
import { Image } from "../Image"
import { GeneralText } from "../Text";

export function Footer(){
    return(
        <HStack
        bg={"lightpink"}
        py={8}
        bottom={0}
        position={"relative"}
        
        >
            <Stack
            left={0}
            position={"absolute"}
            >
            <Image src={"/Logo.png"} alt={"Logo"} width={115} height={80}/>
            </Stack>
            
            <Stack
            width={"100%"}
            textAlign={"center"}
            >
                <GeneralText text={"Vestindo sonhos, criando memórias, na La Belle Robe"} color={"darkpink"} fontSize={"20px"}/>
            </Stack>
        </HStack>
    )
}