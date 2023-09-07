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
    py={600}
    bg={"darkpink"}
    >
      <Stack>
        <GeneralTitle text={"Nossos Produtos"} color={"darkpink"} fontSize={"28px"} textAlign={"center"} bColor={"lightpink"} />
      </Stack>
      
    </HStack>
    
    </>
  );
}
