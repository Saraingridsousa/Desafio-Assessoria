
import { Box, Text } from "@chakra-ui/react"

interface GeneralTitleProps{
    text: string
    color: string
    fontSize: string
    bColor: string
    textAlign: any
}

export function GeneralTitle({text,bColor, color, fontSize, textAlign}:GeneralTitleProps){
    return(
        <>
        <Box
        bg={bColor}
        borderRadius={"12px"}
        display={"inline-block"}
        px={"14px"} 
        py={"10px"}
        boxShadow={" 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}

        >

        <Text
        color={color}
        fontSize={fontSize}
        textAlign={textAlign}
        >
        {text}
        </Text>
        </Box>
        
        </>
    )
}