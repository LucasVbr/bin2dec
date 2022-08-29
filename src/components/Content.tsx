import React, {useState} from 'react';
import {Box, Center, Flex, Input, Text} from '@chakra-ui/react';
import {ArrowDownIcon} from '@chakra-ui/icons';

export default function Content() {
  // States
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  // Actions
  const handleInput = (event: any) => {
    const inputAfterChange: string = event.target.value as string;

    if (inputAfterChange.length < 8 && isBinary(inputAfterChange)) {
      setInput(inputAfterChange);
      handleOutput(inputAfterChange);
    }
  };
  const handleOutput = (binaryValue: string) => {
    const outputAfterChange = (binaryValue.length)
        ? `${parseInt(binaryValue, 2)}` : '';

    setOutput(outputAfterChange);
  };
  const isBinary = (value: string) => {
    const BINARY_CHAR = ['0', '1'];

    for (let char of value) {
      if (!BINARY_CHAR.includes(char)) return false;
    }
    return true;
  };

  // Render
  return (
      <Flex align={'center'} flexDirection={'column'} marginX={10}>
        <Input variant="filled" placeholder={"Binary"} value={input} onChange={handleInput}/>
        <ArrowDownIcon marginY={5} boxSize={8} rounded={'rounded'}/>
        <Text fontSize={'2xl'} align={'center'}>{output}</Text>
      </Flex>
  );
}