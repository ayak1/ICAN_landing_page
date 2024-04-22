import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

export const FormJoinUs = () => {
    const { t ,i18n } = useTranslation();
    const formContainer = document.querySelector('.join_us .section_content form');
    if(formContainer){
        formContainer.setAttribute('dir', i18n.dir());
    }
    return (
        <Form className='d-flex justify-content-center flex-column align-items-center'>
        <Form.Group className="form_group mb-2 d-flex justify-content-center flex-column" controlId="formBasicEmail">
            <Form.Label className='tajawal-medium' >{t('form.email')}</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="form_group mb-2 d-flex justify-content-center flex-column" controlId="formBasicPassword">
            <Form.Label className='tajawal-medium' >{t('form.password')}</Form.Label>
            <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>
       <Form.Group className='form_group mb-2 d-flex justify-content-center flex-column'>
        <Form.Label className='tajawal-medium' required>{t('form.sex')}</Form.Label>

        <Form.Select className='mb-2'>
            <option>{t('form.female')}</option>
            <option>{t('form.male')}</option>
        </Form.Select>
       </Form.Group>
       <Form.Group className='form_group mb-2 d-flex justify-content-center flex-column'>
        <Form.Label className='tajawal-medium' required >{t('form.status')}</Form.Label>

        <Form.Select className='mb-2'>
            <option>in</option>
            <option>out</option>
        </Form.Select>
       </Form.Group>
       <Form.Group className='form_group mb-2 d-flex justify-content-center flex-column'>
       <Form.Label className='tajawal-medium'>{t('form.textarea')}</Form.Label>
            <textarea rows="6" />
       </Form.Group>
        <Button variant="" type="submit">
            {t('form.submit')}
        </Button>
        </Form>
    );
}

