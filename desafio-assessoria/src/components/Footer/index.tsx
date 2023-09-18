import { HStack, Stack } from "@chakra-ui/react";
import { Images } from "../Image"
import { GeneralText } from "../Text";
import { LinkIcon } from "../Link";

export function Footer(){
    return(
        <Stack>
            <HStack
            bg={"lightpink"}
            py={14}
            bottom={0}
            position={"relative"}
            
            >
                <Stack
                left={0}
                position={"absolute"}
                >
                <Images src={"/Logo.png"} alt={"Logo"} width={150} height={115}/>
                </Stack>
                
                <Stack
                width={"100%"}
                textAlign={"center"}
                >
                    <Stack>
                    <GeneralText text={"Vestindo sonhos, criando memórias, na La Belle Robe"} color={"darkpink"} fontSize={"20px"}/>
                    </Stack>

                </Stack>

                <Stack
                position={"absolute"}
                right={2}
                alignItems={"flex-end"}>
                    <LinkIcon href={"https://web.whatsapp.com/"} src={"/LinkWpp.png"} alt={"Link para o whatsapp"} width={152} height={37}/>
                    <LinkIcon href={"https://www.instagram.com/"} src={"/LinkInsta.png"} alt={"Link para o instagram"} width={179} height={37}/>
                    <LinkIcon href={"https://www.google.com/intl/pt-BR/gmail/about/"} src={"/LinkEmail.png"} alt={"Link para o email"} width={188} height={37}/>
                </Stack>
            </HStack>
        </Stack>
    )
}