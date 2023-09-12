import { GeneralTitle } from "@/components/Title";
import { HStack, Stack } from "@chakra-ui/react";

export default function Membros(){
    return(
        <>
             <HStack
             paddingTop={"60px"}
             paddingBottom={"80px"}
             display={"flex"}
             justifyContent={"center"}>
                <Stack>
                <GeneralTitle text={"Membros"} color={"#fff"} fontSize={"24px"} bColor={"darkpink"} textAlign={"center"}/>
                </Stack>
            </HStack>
        </>
    )
    } 