import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

export const FormJoinUs = () => {
    const { t } = useTranslation();

    return (
        <Form className='d-flex justify-content-center flex-column align-items-center'>
        <Form.Group className="form_group mb-2 d-flex justify-content-center flex-column" controlId="formBasicEmail">
            <Form.Label className='tajawal-medium' >Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>

        <Form.Group className="form_group mb-2 d-flex justify-content-center flex-column" controlId="formBasicPassword">
            <Form.Label className='tajawal-medium' >Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>
       <Form.Group className='form_group mb-2 d-flex justify-content-center flex-column'>
        <Form.Label className='tajawal-medium' required>Sex</Form.Label>

        <Form.Select className='mb-2'>
            <option>female</option>
            <option>male</option>
        </Form.Select>
       </Form.Group>
       <Form.Group className='form_group mb-2 d-flex justify-content-center flex-column'>
        <Form.Label className='tajawal-medium' required >Military Status</Form.Label>

        <Form.Select className='mb-2'>
            <option>in</option>
            <option>out</option>
        </Form.Select>
       </Form.Group>
       <Form.Group className='form_group mb-2 d-flex justify-content-center flex-column'>
       <Form.Label className='tajawal-medium'>talk about your self</Form.Label>
            <textarea rows="6" />
       </Form.Group>
        {/* <Form.Group className="mb-2" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="" type="submit">
            Submit
        </Button>
        </Form>
    );
}

