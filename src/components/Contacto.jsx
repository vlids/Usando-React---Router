import { Form, Button } from 'react-bootstrap';

const Contacto = () => {
  return (
    <Form className='w-50 ps-5 pt-5 position-absolute top-50 start-50 translate-middle' >
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
        <Form.Label className='fs-4' >Correo:</Form.Label>
        <Form.Control type="email" placeholder="correo electrónico" className='input'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='fs-4'>Desccripción</Form.Label>
        <Form.Control as="textarea" rows={3} />

      </Form.Group>
      <Button variant="dark">Enviar</Button>
    </Form>
  );
}

export default Contacto;