import React from "react";
import { Dialog } from "@headlessui/react";
import { DialogComponent, useDialog } from "react-dialog-promise";
import Modal from "./Modal";

const ExampleModal: DialogComponent<
  { username: string },
  { confirm: boolean }
> = ({ username, close, isOpen }) => {
  const confirmModal = useDialog(ConfirmModal);

  const handleDeactivate = async () => {
    const result = await confirmModal.open({
      message: `Are you sure you want to deactivate ${username} account? All data will be permanently removed. This action cannot be undone.`,
    });

    if (result) close({ confirm: true });
  };

  return (
    <Modal isOpen={isOpen} onClose={() => close({ confirm: false })}>
      <Dialog.Panel>
        <Dialog.Title>Desactive your account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate {username} account? All data will
          be permanently removed. This action cannot be undone.
        </p>

        <div className="space-x-4">
          <button
            className="bg-red-500 border-2 border-red-700 px-4 py-2 text-lg font-semibold rounded-lg text-white"
            onClick={handleDeactivate}
          >
            Deactivate
          </button>
          <button
            className="bg-white border-2 border-gray-500 px-4 py-2 text-lg font-semibold rounded-lg text-black"
            onClick={() => close({ confirm: true })}
          >
            Cancel
          </button>
        </div>
      </Dialog.Panel>
    </Modal>
  );
};

const ConfirmModal: DialogComponent<{ message: string }, boolean> = ({
  isOpen,
  close,
  message,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={() => close(false)}>
      <Dialog.Panel>
        <Dialog.Title>Please confirm</Dialog.Title>
        <Dialog.Description>{message}</Dialog.Description>
        <div className="space-x-3">
          <button
            className="bg-green-500 border-2 border-green-700 px-4 py-2 text-lg font-semibold rounded-lg text-white"
            onClick={() => close(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 border-2 border-blue-700 px-4 py-2 text-lg font-semibold rounded-lg text-white"
            onClick={() => close(true)}
          >
            Confirm
          </button>
        </div>
      </Dialog.Panel>
    </Modal>
  );
};

const App: React.FC = () => {
  const testModal = useDialog(ExampleModal);

  const handleClick = async () => {
    const result = await testModal.open({ username: "Hello World" });

    if (result.confirm) alert("Account deactivated");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <button
        className="bg-blue-500 text-white px-5 py-1 rounded-lg text-lg shadow"
        onClick={handleClick}
      >
        OPEN
      </button>
    </div>
  );
};

export default App;
