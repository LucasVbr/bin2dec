import React, {useState} from 'react';
import {Flex, Input} from '@chakra-ui/react';
import {ArrowDownIcon, ArrowForwardIcon} from '@chakra-ui/icons';

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
      <Flex align={'center'} flexDirection={{
        base: 'column',
        md: 'row',
      }} marginX={{
        base: 10,
        md: 'auto',
      }}>
        <Input type={'number'} width={'8em'} variant="filled"
               placeholder={'Binary'} value={input} onChange={handleInput}/>

        <ArrowDownIcon marginY={5} boxSize={8} display={{md: 'none'}}/>
        <ArrowForwardIcon marginX={5} boxSize={8} display={{
          base: 'none',
          md: 'block'
        }}/>

        <Input type={'number'} width={'8em'} variant={'filled'} value={output}
        placeholder={"Decimal"}/>
      </Flex>
  );
}