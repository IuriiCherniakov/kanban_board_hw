import React, {useState} from 'react';
import {Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Task from "./Task";

function Controller(props) {

const [isModalOpen, setIsModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState('')


    return (
        <div>
            <>
                <Button onClick={()=> setIsModalOpen(true)}>ADD NEW TASK</Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader>Add new task</ModalHeader>
                <ModalBody>
                    <Label>New title</Label>
                    <Input type='text' value={newTitle} onChange={(e)=> setNewTitle(e.target.value)} ></Input>

                </ModalBody>
                <ModalFooter>
                    <Button onClick={()=>props.addNewTask(newTitle)}>Add new task</Button>
                    {' '}
                    <Button onClick={()=> setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
</>
        </div>
    );
}

export default Controller;
