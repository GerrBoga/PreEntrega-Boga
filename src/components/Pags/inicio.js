import {NavBar} from "../NavBar/navBar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

export const Inicio= () => {
    return (
        <>
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos a Todos, aqui tiene algunas imagenes!"/>
        <main>Imagenes de autos</main>
        <footer>Footer</footer>
        </>);
};