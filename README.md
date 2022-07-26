# React dialog promise

Use dialog in React, without tears

## Installation

React Dialog promise is available as an [npm package](https://www.npmjs.org/package/react-dialog-promise).

```sh
npm install react-dialog-promise
```

## Usage

First, you have to wrap your app with DialogProvider

```typescript jsx
import React from 'react';
import ReactDOM from "react-dom";
import { DialogProvider } from 'react-dialog-promise';

import MyApp from "MyApp";

ReactDOM.render(
  <DialogProvider>
    <MyApp />
  </DialogProvider>,
  document.getElementById("root")
);


```

Then, you have to create your dialog Component

```typescript jsx
import React from 'react';
import { DialogComponent } from 'react-dialog-promise';
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';

interface Props {
  title: string
}

type Result = boolean

const MyDialog: DialogComponent<Props, Result> = ({ isOpen, close, title }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => close(false)}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          Confirm action ?
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => close(true)}>Cancel</Button>
          <Button onClick={() => close(false)}>Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default MyDialog
```

Finally, you can use dialogs in your app

```typescript jsx
import React from 'react';
import { useDialog } from 'react-dialog-promise';

const MyApp: React.FC = () => {
  const dialog = useDialog();

  const handleClick = async () => {
    const result = await dialog(MyDialog, { title: "My easy to use dialog" });

    console.log("Dialog result :", result)
  }

  return (
    <div>
      <button onClick={handleClick}>Open dialog</button>
    </div>
  );

}

export default MyApp;

```

## API

