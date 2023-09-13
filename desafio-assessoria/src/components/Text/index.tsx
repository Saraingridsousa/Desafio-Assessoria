import { Text } from "@chakra-ui/react"

interface GeneralTextProps{
    text: string
    color: string
    fontSize: string
    textAlign?: any
    fontWeight?: string
    textTransform?: any
}

export function GeneralText({text, color,fontSize,textAlign,fontWeight,textTransform}:GeneralTextProps){
    return(
        <Text
        fontSize={fontSize}
        color={color}
        textAlign={textAlign}
        fontWeight={fontWeight}
        textTransform={textTransform}
        >
            {text}
        </Text>
    )
}