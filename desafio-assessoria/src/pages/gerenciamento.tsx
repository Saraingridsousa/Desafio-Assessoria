import { GeneralTitle } from "@/components/Title";
import { HStack, Stack } from "@chakra-ui/react";

export default function Gerenciamento(){
    return(
        <>
             <HStack
             paddingTop={"60px"}
             paddingBottom={"80px"}
             display={"flex"}
             justifyContent={"center"}>
                <Stack>
                <GeneralTitle text={"Gerenciamento de Membros"} color={"#fff"} fontSize={"24px"} bColor={"darkpink"} textAlign={"center"}/>
                </Stack>
            </HStack>
        </>
    )
    }     