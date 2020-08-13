import React, {useState} from 'react';
import {Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import Task from "./Task";

function AddTaskModal(props) {

const [isModalOpen, setIsModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [newPriority, setNewPriority] = useState(0)
    const [newStatus, setNewStatus] = useState('todo')
    const addButtonHandler = () => {
    props.addNewTask(newTitle, newPriority, newStatus)
        setIsModalOpen(false)
    }


    return (
        <div>
            <>
                <Button onClick={()=> setIsModalOpen(true)}>ADD NEW TASK</Button>

            <Modal isOpen={isModalOpen}>
                <ModalHeader>Add new task</ModalHeader>
                <ModalBody>
                    <Label>New title</Label>
                    <Input type='text' value={newTitle} onChange={(e)=> setNewTitle(e.target.value)} ></Input>

            <Row>
                        <Col>
                            <Label> priority</Label>
                            <Input type="select" value={newPriority} onChange={(e)=> setNewPriority(e.target.value)} >
                                <option value={0}>Low</option>
                                <option value={1} >Med</option>
                                <option value={2}>High</option>
                            </Input>
                        </Col>

              <Col>

                  <Label>status</Label>
                  <Input type='select' value={newStatus} onChange ={(e)=>setNewStatus(e.target.value)} >
                      <option value={'todo'}>Todo</option>
                      <option value={'progress'}>progress</option>
                      <option value={'review'}>review</option>
                      <option value={'done'}>done</option>
                  </Input>

              </Col>




                    </Row>

                </ModalBody>
                <ModalFooter>
                    <Button onClick={addButtonHandler}>Add new task!!</Button>
                    {' '}
                    <Button onClick={()=> setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
</>
        </div>
    );
}

export default AddTaskModal;
