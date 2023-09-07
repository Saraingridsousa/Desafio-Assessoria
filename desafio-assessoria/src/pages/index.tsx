import { SectionIndex, TextHome } from "@/components/Sections";
import { GeneralTitle } from "@/components/Title";
import { HStack, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
    <Stack spacing={4}>
      <SectionIndex />
    </Stack>
    
    <Stack>
        <TextHome />
    </Stack>

    <HStack
    py={700}
    bg={"darkpink"}
    paddingTop={"18px"}
    paddingBottom={"600px"}
    display={"flex"}
    justifyContent={"center"} 
    >
      
        <GeneralTitle text={"Nossos Produtos"} color={"darkpink"} fontSize={"28px"} textAlign={"center"} bColor={"lightpink"} />
      



    </HStack>
    
    </>
  );
}
