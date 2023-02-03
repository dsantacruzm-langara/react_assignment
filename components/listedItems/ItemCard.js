import { Box, Button, Center, Divider, Heading, Image, Text, VStack } from 'native-base'

const ItemCard = props => {
  const { title, popularity, releaseDate } = props
  return (
    <Box borderWidth={1} borderRadius='md' pb={5} mb={10}>
      <VStack space={4} divider={<Divider />}>
        <Center>
          <Heading size='lg'>{title}</Heading>
          <Text>{popularity}</Text>
          <Text>{releaseDate}</Text>
        </Center>
      </VStack>
    </Box>
  )
}

export default ItemCard