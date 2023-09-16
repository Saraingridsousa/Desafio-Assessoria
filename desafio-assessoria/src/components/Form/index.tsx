import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface InputIndexProps{
    label: string
    type: string
    w: string
    placeholder: string
}

export function InputIndex({label, type,w,placeholder}:InputIndexProps){
    return(
        <FormControl
        w={w}
        >
        <FormLabel>{label}</FormLabel>
        <Input
            type={type} 
            placeholder={placeholder} 
            />
        </FormControl>
    )
}