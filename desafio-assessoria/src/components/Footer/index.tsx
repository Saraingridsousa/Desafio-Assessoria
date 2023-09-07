import { HStack, Stack } from "@chakra-ui/react";
import { Image } from "../Image"
import { GeneralText } from "../Text";

export function Footer(){
    return(
        <HStack
        bg={"lightpink"}
        py={9}
        bottom={0}
        position={"relative"}
        
        >
            <Stack
            left={0}
            position={"absolute"}
            >
            <Image src={"/Logo.png"} alt={"Logo"} width={120} height={85}/>
            </Stack>
            
            <Stack
            width={"100%"}
            textAlign={"center"}
            >
                <GeneralText text={"Vestindo sonhos, criando memórias, na La Belle Robe"} color={"darkpink"} fontSize={"20px"}/>
            </Stack>

            <Stack
            position={"absolute"}
            right={2}>
                <Image src={"/SocialFooter.png"} alt={"Redes Sociais"} width={170} height={50}/>
            </Stack>
        </HStack>
    )
}