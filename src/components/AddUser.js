import React, {useState, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';
import {v4 as uuid} from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';


export const AddUser = () => {
    const [name, setName] = useState('');
    const {addUser} = useContext(GlobalContext);

    const history = useHistory();

    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name
        }
        addUser(newUser);
        history.push('/');
    }

    const onChange = (e) => {
        setName(e.target.value);
    }
    return (
        <>
            <h1>Add User</h1>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label>Name</Label>
                    <Input value={name} onChange={onChange} type="text" placeholder="Enter Name" />
                </FormGroup>
                <Button type="submit" color="primary">Submit</Button>
                <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
            </Form>
        </>
    )
}
