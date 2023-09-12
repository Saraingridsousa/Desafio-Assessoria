
import { SectionIndex, TextHome } from "@/components/Sections";
import { GeneralTitle } from "@/components/Title";
import { Grid, GridItem, HStack, Stack } from "@chakra-ui/react";
import { GridHome, GridHome2, GridHome3 } from "@/components/Card";


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
    py={20}
    bg={"darkpink"}
    paddingTop={"18px"}
    
    display={"flex"}
    justifyContent={"center"} 
    flexDirection={"column"}
    >
        <Stack
        marginTop={18}>
        <GeneralTitle text={"Principais Produtos"} color={"darkpink"} fontSize={"28px"} textAlign={"center"} bColor={"lightpink"} />
        </Stack>

        <Stack
        marginTop={14}
        >
        <Grid templateColumns='repeat(1, 1fr)' gap={8}>

          <GridItem>
            <GridHome/>
          </GridItem>

          <GridItem>
            <GridHome2/>
          </GridItem>

          <GridItem>
            <GridHome3/>
          </GridItem>

        </Grid>
          
        </Stack>
    </HStack>
    
    </>
  );
}
