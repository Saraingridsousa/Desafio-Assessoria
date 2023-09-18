import { Button } from "@chakra-ui/react"
import NextLink from 'next/link'

interface GeneralButtonProps{
    textButton: string
    href: string
}

export function GeneralButton({ textButton, href }: GeneralButtonProps) {
    return (
      <Button
        as={NextLink}
        href={href}
        bg={"darkpink"}
        color={"white"}
        fontSize={"18px"}
        fontWeight={2}
        borderRadius={"16px"}
        py={3}
        w={"10%"} 
        _hover={{
          bg: "#AA4946"
        }}
      >
        {textButton}
      </Button>
    );
  }
  