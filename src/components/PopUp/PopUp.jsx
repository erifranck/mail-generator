import React from 'react';
import styled from 'styled-components';
import {Button} from "../Button/Button";
import {Field} from "../Field/Field";

const {Consumer, Provider} = React.createContext({});
export const PopUpConsumer = Consumer;
export const PopUpProvider = (props) => {
    const [show, togglePopUp] = React.useState(false);
    const [items, setItem] = React.useState({});
    const [editable, setEditable] = React.useState({});
  return (
      <Provider value={{
          toggle: (editable) => {
              togglePopUp(!show);
              setEditable(editable);
          },
          show,
          items,
          editable,
          setItem
      }} >
          {props.children}
      </Provider>
  )
};
export const PopUp = () => {
    const PopUpWrapper = styled.div`
        position: fixed;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, 0.12);
    `;
    const PopUpContent = styled.div`
      width: 200px;
      height: 100px;
      background: white;
      
    `;
    const fieldRef = React.useRef(null);

    return (
        <Consumer>
            {
                ({show, toggle, items, setItem, editable}) => show && editable ? (
                    <PopUpWrapper>
                        <PopUpContent>
                            <Field type="text" ref={fieldRef} />
                            <Button onClick={() => {
                                toggle();
                                setItem({...items, [editable]: fieldRef.current.value});
                            }}>
                                continuar
                            </Button>
                        </PopUpContent>
                    </PopUpWrapper>
                ) : null
            }
        </Consumer>
    )
};
