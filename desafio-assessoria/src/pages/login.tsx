import { CardLogin } from "@/components/Card";
import { Images } from "@/components/Image";
import { Stack } from "@chakra-ui/react";

export default function Login(){
    return (
        <Stack
        as="main"
        py={10}
        align={"center"}
        flexDirection={"row"}
        >
            <Images src={"/ImageLogin.png"} alt={"Imagem da página de login"} width={341} height={364}/>
            <CardLogin/>
        </Stack>
        
    )
}