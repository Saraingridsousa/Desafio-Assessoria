import { Stack } from "@chakra-ui/react"
import { SectionForms } from "../Sections"


export function ArticleContato(){
    return(
        <Stack
            as="article"
            display={"flex"}
            alignItems={"stretch"}
            marginRight={12}
            marginLeft={12}
            marginBottom={20}
        >
        <SectionForms/>
        </Stack>
    )
}