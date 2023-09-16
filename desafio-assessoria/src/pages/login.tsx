import { CardLogin } from "@/components/Card";
import { Images } from "@/components/Image";

import { Stack } from "@chakra-ui/react";

export default function Login() {
    return (
      <Stack
        as="main"
        py={10}
        align={"center"}
        flexDirection={"row"}
        justifyContent={"center"}
        spacing={-30}
        alignItems={"flex-start"}
        >
        <Images src={"/ImageLogin.png"} alt={"Imagem da página de login"} width={251} height={544}  />
        <CardLogin />
      </Stack>
    )
  }