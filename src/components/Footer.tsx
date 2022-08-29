import {Box, Divider, Link, Text} from '@chakra-ui/react';

export default function Footer() {
  return (
      <Box m={4}>
        <Divider/>
        <Text align={'center'} marginTop={4}>
          <Link href={"https://github.com/LucasVbr/bin2dec"} target={'_blank'}>See code on GitHub</Link>
        </Text>
      </Box>
  );
}
