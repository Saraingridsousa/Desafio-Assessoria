import { Box, HStack, Stack } from "@chakra-ui/react"
import { Images } from "../Image"
import { GeneralText } from "../Text"
import { InputIndex } from "../Form"

export function GridHome(){
    return (
        <>
        <Stack
        px={70}
        py={10}
        bg={"white"}
        spacing={4}
        boxShadow={"8px 6px 10px 0px #00000061"}
        borderRadius={" 16px"}
        paddingLeft={"40px"}
        flexDirection={"revert"}
       
        >  
          <Images
            src={"/Vestido1.png"}
            alt={"Primeiro produto destaque da Home"}
            width={679}
            height={582}/>
            <Stack bgPosition={"colunm"} spacing={4}>
            <GeneralText text={"Sonho de Verão"} color={"darkpink"} fontSize={"24px"}
            />
            <Stack spacing={2}>
            <GeneralText text={"Este vestido branco de alcinha é a escolha perfeita para os dias quentes da estação. Sua alcinha delicada adiciona um toque de sofisticação, enquanto o tecido fresquinho proporciona conforto o dia todo. Disponível nos tamanhos PP ao G, o nosso vestido abraça todos os corpos, e sua cor branca pura evoca a brisa do mar. Este vestido é ideal para passeios à beira-mar, festas ao ar livre ou qualquer ocasião em que você deseje se sentir elegante e confortável. Vista-se com a peça e mergulhe no sonho do verão francês."} color={"darkpink"} fontSize={"16px"}/>
            <GeneralText text={"R$ 150,00"} color={"darkpink"} fontSize={"20px"}/>
            </Stack>
            </Stack>
        </Stack>
</>
    )

}

export function GridHome2(){
    return (
        <>
        <Stack
        px={70}
        py={10}
        bg={"white"}
        spacing={10}
        boxShadow={"8px 6px 10px 0px #00000061"}
        borderRadius={" 16px"}
        
        paddingLeft={"40px"}
        flexDirection={"revert"}
       
        >  
          <Images
            src={"/Vestido2.png"}
            alt={"Segundo produto destaque da Home"}
            width={479}
            height={582}/>
            <Stack bgPosition={"colunm"} spacing={4}>
            <GeneralText text={"Noite Elegante"} color={"darkpink"} fontSize={"24px"}
            />
            <Stack spacing={2}>
            <GeneralText text={"Descubra o Noite Elegante, um vestido preto extremamente elegante, de mangas longas com um corte que abraça suas curvas. Disponível nos tamanhos P ao GG, este vestido é perfeito para todas as silhuetas. Esteja você se preparando para uma noite especial ou um evento glamoroso, ele vai garantir que você brilhe com sofisticação e confiança."} color={"darkpink"} fontSize={"16px"}/>
            <GeneralText text={"R$140,00"} color={"darkpink"} fontSize={"20px"}/>
            </Stack>
        </Stack>
        </Stack>
</>
    )

}

export function GridHome3(){
    return (
        <>
        <Stack
        px={70}
        py={10}
        bg={"white"}
        spacing={10}
        boxShadow={" 5px 5px 10px 0px rgba(0, 0, 0, 0.25)"}
        borderRadius={" 16px"}
        
        paddingLeft={"40px"}
        flexDirection={"revert"}
       
        >  
          <Images
            src={"/Vestido3.png"}
            alt={"Segundo produto destaque da Home"}
            width={579}
            height={582}/>
            <Stack bgPosition={"colunm"} spacing={3}>
            <GeneralText text={"Vestido Melissa"} color={"darkpink"} fontSize={"24px"}
            />
            <Stack spacing={2}>
            <GeneralText text={" Descubra a elegância descomplicada do vestido Serenidade Casual. Este encantador vestido azul combina o conforto de um corte soltinho com um toque sutil de estilo ao marcar delicadamente a cintura no ponto certo. Disponível nos tamanhos P, M e G, é a escolha perfeita para todas as ocasiões. Vista-se com o Serenidade Casual e experimente a beleza da simplicidade com um toque de sofisticação."} color={"darkpink"} fontSize={"16px"}/>
            <GeneralText text={"R$160,00"} color={"darkpink"} fontSize={"20px"}/>
            </Stack>
            </Stack>
        </Stack>
</>
    )

}

export function CardLogin(){    
    return(
        <Stack
        w={"60%"}
        >
           
            <Stack
                spacing={16}
                align={"center"}
                px={9}
                py={10}
            >
                <HStack
                    w={"100%"}
                    justify={"space-between"}
                >
                    
                    <InputIndex label={"Email"} color={"white"} type={"email"} w={"30%"} placeholder={"Digite aqui seu email"} />
                    
                    <InputIndex label={"Senha"} type={"password"} w={"30%"} placeholder={"Digite aqui sua senha"} /> 
                </HStack>
            </Stack>
        </Stack>
    )
 }