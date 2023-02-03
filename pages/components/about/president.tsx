import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function President() {
    return (
        <Stack
            bg={useColorModeValue('gray.50', 'gray.800')}
            py={16}
            px={8}
            spacing={{ base: 8, md: 10 }}
            align={'center'}
            direction={'column'}>

            <Box textAlign={'center'}>
                <Avatar
                    src={
                        './presidentPic.jpeg'
                    }
                    
                    mb={2}
                />

                <Text fontWeight={600}>Dr. Arif Alvi</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
                    President of the Islamic Republic of Pakistan
                </Text>
            </Box>
            <Text
          word-wrap= 'break-word'
                fontSize={{ base: 'sm', md: 'sm' }}
                
                maxW={'2xl'}>
                Dr. Arif Alvi was sworn in as the 13th President of Pakistan on 9th September 2018.
He  born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery  from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. Then He completed his Masters  Science in the field of Prosthodontics from University of Michigan  and in Orthodontics from University of Pacific, San Francisco .And he was also awarded fellowship ‘Diplomatic American Board of Orthodontists.


            </Text>
        </Stack>
    );
}