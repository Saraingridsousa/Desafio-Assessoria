import { Stack } from "@chakra-ui/react"
import { Images } from "../Image"
import { GeneralText } from "../Text"

export function GridHome(){
    return (
        <>
        <Stack
        px={80}
        py={25}
        bg={"white"}
        spacing={5}
        boxShadow={"8px 6px 10px 0px #00000061"}
        borderRadius={" 16px"}
        
        paddingLeft={"20px"}
        flexDirection={"revert"}
       
        >  
          <Images
            src={"/Vestido1.png"}
            alt={"Primeiro produto destaque da Home"}
            width={179}
            height={182}/>
            <Stack bgPosition={"colunm"} spacing={4}>
            <GeneralText text={"Vestido Melissa"} color={"darkpink"} fontSize={"24px"}
            />

            <GeneralText text={" gvhtrgmtrhgtrmjgfjcxojvreilhsdfumherusiofhieeruphfgumrhoejd"} color={"darkpink"} fontSize={"16px"}/>
            </Stack>
        </Stack>
</>
    )

}

export function GridHome2(){
    return (
        <>
        <Stack
        px={80}
        py={25}
        bg={"white"}
        spacing={5}
        boxShadow={"8px 6px 10px 0px #00000061"}
        borderRadius={" 16px"}
        
        paddingLeft={"20px"}
        flexDirection={"revert"}
       
        >  
          <Images
            src={"/Vestido2.png"}
            alt={"Segundo produto destaque da Home"}
            width={179}
            height={182}/>
            <Stack bgPosition={"colunm"} spacing={4}>
            <GeneralText text={"Vestido Melissa"} color={"darkpink"} fontSize={"24px"}
            />

            <GeneralText text={" gvhtrgmtrhgtrmjgfjcxojvreilhsdfumherusiofhieeruphfgumrhoejd"} color={"darkpink"} fontSize={"16px"}/>
            </Stack>
        </Stack>
</>
    )

}

export function GridHome3(){
    return (
        <>
        <Stack
        px={80}
        py={25}
        bg={"white"}
        spacing={5}
        boxShadow={" 5px 5px 10px 0px rgba(0, 0, 0, 0.25)"}
        borderRadius={" 16px"}
        
        paddingLeft={"20px"}
        flexDirection={"revert"}
       
        >  
          <Images
            src={"/Vestido3.png"}
            alt={"Segundo produto destaque da Home"}
            width={179}
            height={182}/>
            <Stack bgPosition={"colunm"} spacing={4}>
            <GeneralText text={"Vestido Melissa"} color={"darkpink"} fontSize={"24px"}
            />

            <GeneralText text={" gvhtrgmtrhgtrmjgfjcxojvreilhsdfumherusiofhieeruphfgumrhoejd"} color={"darkpink"} fontSize={"16px"}/>
            </Stack>
        </Stack>
</>
    )

}