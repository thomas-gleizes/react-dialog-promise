import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ChakraProvider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import { DialogComponent, DialogProvider, useDialog } from '../dist';

const DialogExample: DialogComponent<{ text: string }> = ({ isOpen, close, text }) => {
  return (
    <Modal isOpen={isOpen} onClose={() => close(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Example Dialog</ModalHeader>
        <ModalBody>
          <div>{text}</div>
        </ModalBody>
        <ModalFooter>
          <button onClick={() => close(false)}>Close</button>
          <button onClick={() => close(true)}>Valid</button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const App = () => {
  const dialog = useDialog();

  const handleClick = async () => {
    const result = await dialog(DialogExample, { text: 'Hello World' });

    console.log('Result', result);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle Modal</button>
    </div>
  );
};

ReactDOM.render(
  <ChakraProvider>
    <DialogProvider options={{ timeout: 400 }}>
      <App />
    </DialogProvider>
  </ChakraProvider>,
  document.getElementById('root')
);
