import  { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme( {
    colors: {
        rosaclaro: "#FBB4B8",
        rosaescuro: "#CA6764"
    },
    styles: {
        global: {
            body: {
                bg: "#F6E8E9"
            } 
        }
    },
    breakpoints: {
    "2xl": "2560px",
    "x1": "1440px",
    "lg": "1024px",
    "md": "768px",
    "sm": "425px",
    "xs": "375px",
    "xxs": "320px",
    "xxxs": "200px"
    }

})