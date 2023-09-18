import { ArticleContato } from "@/components/Article";
import { LinkIcon } from "@/components/Link";
import { GeneralTitle } from "@/components/Title";
import { HStack, Stack } from "@chakra-ui/react";

export default function Contato(){
    return(
        <>
             <HStack
             paddingTop={"60px"}
             paddingBottom={16}
             display={"flex"}
             justifyContent={"center"}>
                <Stack>
                <GeneralTitle text={"Fale Conosco"} color={"#fff"} fontSize={"24px"} bColor={"darkpink"} textAlign={"center"}/>
                </Stack>
            </HStack>

            <HStack
            spacing={10}
            flexDirection={"row"} 
            justifyContent={"center"}
            alignItems={"center"} 
            marginBottom={16}
            >
                <LinkIcon href={"https://web.whatsapp.com/"} src={"/ContatoWpp.png"} alt={"Icone de contato do wpp"} width={94} height={77}/>
                <LinkIcon href={"https://www.instagram.com/"} src={"/ContatoInsta.png"} alt={"Icone de contato do instagram"} width={94} height={77}/>
                <LinkIcon href={"https://www.google.com/intl/pt-BR/gmail/about/"} src={"/ContatoEmail.png"} alt={"Icone de contato do instagram"} width={94} height={77}/>
            </HStack>
            
            <ArticleContato/>
          
        </>
    )
}