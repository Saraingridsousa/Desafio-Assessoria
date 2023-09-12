import { HStack } from "@chakra-ui/react";
import { LinkIcon, LinkNavbar } from "../Link";



export function Navbar(){
    return(
        <HStack
            bg={"lightpink"}
            py={0.5}
            justify={"center"}
            spacing={8}
            position={"sticky"}
            top={"0"}
            zIndex={"1000"}
        >
            <LinkNavbar href={"/"} text={"Home"}/>
            <LinkNavbar href={"/contato"} text={"Contato"}/>
            <LinkNavbar href={"/membros"} text={"Membros"}/>
            <LinkIcon href={"/"} src={"/Logo.png"} alt={"Logo"} width={115} height={80}/>
            <LinkNavbar href={"/gerenciamento"} text={"Gerenciamento"}/>
            <LinkNavbar href={"/login"} text={"Login"}/>
            
              
        </HStack>

    )
}