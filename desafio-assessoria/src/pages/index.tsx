import { SectionIndex, TextHome } from "@/components/Sections";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <><Stack spacing={4}>
      <SectionIndex />
    </Stack>
    
    <Stack>
        <TextHome />
      </Stack></>
  );
}
