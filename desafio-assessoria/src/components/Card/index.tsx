import { Grid, GridItem } from '@chakra-ui/react'

export function GridHome(){
    return (
        <Grid templateColumns='repeat(1, 1fr)' gap={3}>
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
</Grid>
    )

}