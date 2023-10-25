import { useForm } from "react-hook-form";

const Catalogo = () => {

  const {register, handleSubmit }= useForm();

  const enviar = (data) => {
    console.log(data);
  }

  return (
    <div className='container'>
      <h1 className='main-title'> Contacto del Catalogo </h1>
      <h3>Ingrese aqui sus datos para seguir avanzando con el catalogo privado</h3>

      <form className='formulario' onSubmit={handleSubmit(enviar)}>
        
        <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
       
        <input type="email" placeholder='Ingresa tu email' {...register("email")} />

        <button type='submit'> Enviar </button>
      </form>
    </div>
  )
}

export default Catalogo