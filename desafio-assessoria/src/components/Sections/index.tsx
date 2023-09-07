import { Stack } from "@chakra-ui/react";
import { GeneralText } from "../Text";

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
    marginTop={20}
    marginBottom={20}
    marginRight={200} 
    marginLeft={200}
    textAlign={"center"}
    >
        <GeneralText text={"Bem-vindo à La Belle Robe, onde cada vestido é mais do que apenas uma peça de roupa - é um portal para a celebração de momentos inesquecíveis. Acreditamos que as memórias de momentos preciosos merecem ser vividas de maneira extraordinária, e é por isso que cada vestido em nossa coleção é cuidadosamente escolhido para capturar a essência da elegância e da beleza."} color={"darkpink"} fontSize={"20px"}/>
      </Stack>
    )
}