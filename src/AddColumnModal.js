import React, {useState} from 'react';
import {Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import Task from "./Task";

function AddColumnModal(props) {

const [isModalOpen, setIsModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState('')

    const addButtonHandler = () => {
    props.addNewColumn(newTitle)
        setIsModalOpen(false)
    }


    return (
        <div>
            <>
                <Button onClick={()=> setIsModalOpen(true)}>ADD NEW Column</Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader>Add new column!!!</ModalHeader>
                <ModalBody>
                    <Label>New title</Label>
                    <Input type='text' value={newTitle} onChange={(e)=> setNewTitle(e.target.value)} ></Input>



                </ModalBody>
                <ModalFooter>
                    <Button onClick={addButtonHandler}>Add new Column!!</Button>
                    {' '}
                    <Button onClick={()=> setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
</>
        </div>
    );
}

export default AddColumnModal;
