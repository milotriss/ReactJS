import React, { createContext } from 'react';
import { Button, Modal, Space } from 'antd';

const ReachableContext = createContext<string | null>(null);
const UnreachableContext = createContext<string | null>(null);

const config = {
  title: 'Use Hook!',
  content: (
    <>
      <ReachableContext.Consumer>{(name) => `Reachable: ${name}!`}</ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>{(name) => `Unreachable: ${name}!`}</UnreachableContext.Consumer>
    </>
  ),
};
interface Props {
    getModal:Function
}
const ModalComponent = (props:Props):JSX.Element => {
  const [modal, contextHolder] = Modal.useModal();
    props.getModal(modal)
    
  return (
    <ReachableContext.Provider  value="Light">
      <Space style={{display:"none"}}>
        <Button
          onClick={async () => {
            const confirmed = await modal.confirm(config);
            console.log('Confirmed: ', confirmed);
          }}
        >
          Confirm
        </Button>
        <Button
          onClick={() => {
            modal.warning(config);
          }}
        >
          Warning
        </Button>
        <Button
          onClick={async () => {
            modal.info(config);
          }}
        >
          Info
        </Button>
        <Button
          onClick={async () => {
            modal.error(config);
          }}
        >
          Error
        </Button>
      </Space>
      {/* `contextHolder` should always be placed under the context you want to access */}
      {contextHolder}

      {/* Can not access this context since `contextHolder` is not in it */}
      <UnreachableContext.Provider value="Bamboo" />
    </ReachableContext.Provider>
  );
};

export default ModalComponent;