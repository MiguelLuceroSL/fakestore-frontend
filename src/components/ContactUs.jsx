import { useForm } from 'react-hook-form';
const ContactUs = () => {
    const { register, handleSubmit } = useForm();
    const enviar = (data) => {
        console.log(data);
    }
    return (
        <div className='container'>
            <h1 className="main-title">Contact Us</h1>
            <form className='formulario' onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder='Enter your name' {...register("name")} />
                <input type="email" placeholder='Enter your e-mail' {...register("email")} />
                <button className='enviar' type='submit'>Submit</button>

            </form>

        </div>
    )
}

export default ContactUs