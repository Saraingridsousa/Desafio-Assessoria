import { Text } from "@chakra-ui/react"

interface GeneralTextProps{
    text: string
    color: string
    fontSize: any
    textAlign?: any
}

export function GeneralText({text, color,fontSize,textAlign}:GeneralTextProps){
    return(
        <Text
        fontSize={fontSize}
        color={color}
        textAlign={textAlign}
        >
            {text}
        </Text>
    )
}