import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Input} from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';

import {Wrapper, Content } from '../_layouts/auth/styles';

import * as Yup from 'yup';
import api from '../../services/api';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido ')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),   
});

export default function SignIn() {
  const  dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);


  function handleSubmit({email, password}){
    // api.post('/auth/authenticate', {
    //   email,
    //   password
    // }).then(response => {
    //   console.log(response.data)
    // }) 
    dispatch(signInRequest(email, password));
  };
  
  return(
    <Wrapper>
      <Content>
        <h1>  MegaBlog - MegaCode</h1>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name = "email" placeholder="Seu e-mail"/>
          <Input name="password" type="password" placeholder="Sua senha"/>
        
          <button type="submit">{ loading ? 'Carregando...': 'Acessar'}</button>
          <Link to='/register'>Cadastre sua conta</Link>
        </Form>
      </Content>
    </Wrapper>
    );
}
