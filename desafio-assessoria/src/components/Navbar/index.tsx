import { HStack } from "@chakra-ui/react";
import { LinkNavbar } from "../Link";
import { Image } from "../Image"


export function Navbar(){
    return(
        <HStack
            bg={"rosaclaro"}
            py={0.02}
            justify={"center"}
            spacing={10}
            position={"sticky"}
            top={"0"}
            zIndex={"1000"}
        >
            <LinkNavbar href={""} text={"Home"}/>
            <LinkNavbar href={""} text={"Contato"}/>
            <LinkNavbar href={""} text={"Membros"}/>
            <Image src={"/Logo.png"} alt={"Logo"} width={115} height={80}/>
            <LinkNavbar href={""} text={"Gerenciamento"}/>
            <LinkNavbar href={""} text={"Login"}/>
              
        </HStack>

    )
}