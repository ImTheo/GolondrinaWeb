import React from 'react'
import { useNavigate} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage} from 'formik';
function Login() {
    const navigate = useNavigate() 
    return (
        < Formik

      initialValues={{
        user: '',
        password: ''
      }
      }

      onSubmit={async (values, actions) => { 
        console.log(values.user)       
            if(values.user==='admin' && values.password === 'pasword'){
                navigate('/admin')
            }else{
                actions.resetForm()
            }
      }}
    >
           <div class="contenedor-formulario contenedor">
            <div class="imagen-formulario">
            </div>
            <Form class="formulario" >
                <div class="texto-formulario">
                    <h2>Bienvenido de nuevo</h2>
                    <p>Inicia sesión con tu cuenta</p>
                </div>
                <div class="input">
                    <label for="usuario">Usuario</label>
                    <Field placeholder="Ingresa tu nombre" type="text" name="user" />
                </div>
                <div class="input">
                    <label for="clave">Contraseña</label>
                    <Field placeholder="Ingresa tu contraseña" type="password"  name="password" />
                </div>
                <div class="input">
                    <Field type="submit" value="Login" class="form-btn" />
                </div>
            </Form>
        </div>
    </Formik>
    )
}

export default Login