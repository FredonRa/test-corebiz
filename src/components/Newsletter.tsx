import * as React from 'react';
import HomeServices from '../services/HomeServices';
import Button from './Button';
import Input from './Input';
import toast, { Toaster } from 'react-hot-toast';

const Newsletter = () => {
    const [ values, setValues ] = React.useState({
        name: "",
        email: ""
    });

    const [ errors, setErrors ] = React.useState({
        nameError: "",
        emailError: "",
    });

    const isEmail = (email: string) => {
        const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    const isOnlyText = (text: string) => {
        const regex = /[a-zA-Z]+$/;
        return regex.test(text);
    }

    const handleText = (type: "name" | "email", value: string) => {
        setValues({...values, [type]: value});
    }

    const initialErrors = {
        nameError: "",
        emailError: "",
    }

    const initialValues = {
        name: "",
        email: ""
    }

    const onSubmit = async(e: React.SyntheticEvent) => {
        e.preventDefault()
        let validForm = true;
        const { name, email } = values;
        
        if (name === "" || !isOnlyText(name)) {
            console.log("error 1 ", name)
            validForm = false;
            setErrors({...initialErrors, nameError: "Debe ingresar un nombre válido para continuar"});
            return
        } else setErrors({emailError: "", nameError: ""});

        if (email === "" || !isEmail(email)) {
            validForm = false;
            setErrors({...initialErrors, emailError: "Debe ingresar un email válido para continuar"});
            return
        } else setErrors({emailError: "", nameError: ""});

        if (validForm) {
            try {
                const response = await HomeServices.postNewsletter(values);
                toast.success('Suscripción realizada con éxito!');
                setValues({...initialValues})
            } catch (error) {
                toast.error('Ocurrió un error, por favor vuelva a intentarlo en unos momentos')
            }
        }
    }

    return (  
        <article id='newsletter'>
            <h2>¡&Uacute;nete a nuestras novedades y promociones!</h2>
            <form className='form-newsletter' onSubmit={onSubmit}>
                <Input 
                    placeholder="Ingresa tu nombre" 
                    onChangeText={(text) => handleText("name", text)}
                    style={{
                        border: "solid 1px",
                        borderColor: values.name !== "" && errors.nameError == "" ? "#83BD75" : errors.nameError !== "" ?  "#EB5353" : "#fff"
                    }}
                    value={values.name}
                />
                <Input 
                    placeholder="Ingresa tu email" 
                    onChangeText={(text) => handleText("email", text)}
                    style={{
                        border: "solid 1.5px",
                        borderColor: values.email !== "" && errors.emailError == "" ? "#83BD75" : errors.emailError !== "" ?  "#EB5353" : "#fff"
                    }}
                    value={values.email}
                />
                <Button 
                    title='Suscribirme' 
                    style={{ 
                        background: "#000",
                        border: "none",
                        color: "#fff",
                        width: "100%",
                        textTransform: "capitalize",
                        padding: "15px",
                        height: "52px"
                    }}
                    type={"submit"}
                />
            </form>
            {errors.nameError !== "" && <p className='errorInput'>* {errors.nameError}</p>}
            {errors.emailError !== "" && <p className='errorInput'>* {errors.emailError}</p>}
            <Toaster 
                position="bottom-center"
                toastOptions={{
                    success: {
                        duration: 15000,
                    },
                    error: {
                        duration: 15000,
                    },
                }}
            />
        </article>
    );
}
 
export default Newsletter;