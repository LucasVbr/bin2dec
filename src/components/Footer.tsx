import {Box, Divider, Link, Text} from '@chakra-ui/react';

export default function Footer() {
  return (
      <Box m={4}>
        <Divider/>
        <Text align={'center'} marginTop={4}>
          MIT Licence © 2022 - <Link>See code on GitHub</Link>
        </Text>
      </Box>
  );
}