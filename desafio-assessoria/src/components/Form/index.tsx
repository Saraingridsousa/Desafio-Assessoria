import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface InputIndexProps {
    label: string
    type: string
    w: string
    placeholder: string
  }
  
  export function InputIndex({ label, type, w, placeholder }: InputIndexProps) {
    return (
      <FormControl w={w}>
        <FormLabel color={"darkpink"} fontSize={"18px"}>{label}</FormLabel>
        <Input
          type={type}
          placeholder={placeholder}
          bg={"white"}
          borderRadius={"16px"}
          boxShadow={"0px 5px 0px 0px rgba(0, 0, 0, 0.20)"}
        />
      </FormControl>
    )
  }