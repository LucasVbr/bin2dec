import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import {ChakraProvider, Flex, Spacer} from '@chakra-ui/react';

export default function App() {
  return (
      <ChakraProvider>
        <Flex width="100vw" minHeight="100vh"
              flexDirection="column" justifyContent="space-between">
          <Header/>
          <Content/>
          <Footer/>
        </Flex>
      </ChakraProvider>
  );
}
