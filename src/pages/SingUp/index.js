import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';
import { signUpRequest } from '../../store/modules/auth/actions';
import { Wrapper, Content } from '../_layouts/auth/styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido ')
    .required('O e-mail é obrigatório'),
  password: Yup.string().min(6,'No mínimo 6 caracteres')
  .required('A senha é obrigatória'),   
});


export default function SignUp() {

  const dispatch = useDispatch();

  function handleSubmit({name, email, password }){
    dispatch(signUpRequest(name, email, password));
  } 
  return(
    <Wrapper>
      <Content>
        <h1>  MegaBlog - MegaCode</h1>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" type="text"placeholder="Seu nome completo"/>
          <Input name="email" type="email"placeholder="Seu e-mail"/>
          <Input name="password" type="password" placeholder="Sua senha"/>
        
          <button type="submit">Criar conta</button>
          <Link to='/'>Já tenho uma conta</Link>
        </Form>
      </Content>
    </Wrapper>
    );
}
