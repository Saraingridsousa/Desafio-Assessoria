import {  Stack } from "@chakra-ui/react";
import { GeneralText } from "../Text";
import { InputIndex } from "../Form";
import {GeneralButton } from "../Button";

export function SectionIndex(){
    return(
        <Stack
        bgImage="url('/ImageHome.png')"
        bgRepeat= {"no-repeat"}
        bgSize={"100%"}
        py={200}
        ></Stack>
    )
}

export function TextHome(){
    return(
    <Stack
    marginTop={55}
    marginBottom={65}
    marginRight={250} 
    marginLeft={250}
    textAlign={"center"}
    >
        <GeneralText text={"Bem-vindo à La Belle Robe, onde cada vestido é mais do que apenas uma peça de roupa - é um portal para a celebração de momentos inesquecíveis. Acreditamos que as memórias de momentos preciosos merecem ser vividas de maneira extraordinária, e é por isso que cada vestido em nossa coleção é cuidadosamente escolhido para capturar a essência da elegância e da beleza."} color={"darkpink"} fontSize={"22px"}/>
      </Stack>
    )
}

export function SectionForms(){
    return(
        <Stack
            as="section"
            spacing={6}
        >
            <InputIndex label={"Nome:"} type={"name"} placeholder={""} w={"100%"}/>
            <InputIndex label={"Email:"} type={"email"} placeholder={""} w={"100%"}/>
            <InputIndex label={"Mensagem:"} type={"text"} placeholder={""} w={"100%"} h={"70px"}/>
            <GeneralButton textButton={"Enviar"} href={"/contato"}/>
        </Stack>
    )
}

