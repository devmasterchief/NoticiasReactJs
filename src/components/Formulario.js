import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({setCategoria}) => {
    const OPCIONES = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sport', label: 'Deportes'},
        { value: 'technology', label: 'Tecnologia'},
    ];

    //Utilizar Custom Hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    const buscarNoticias = e => {
        e.preventDefault();
        setCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form 
                    onSubmit={buscarNoticias}
                    >
                    <h2 className={styles.heading}>
                        Encuentra Noticias por Categorias
                    </h2>

                    <SelectNoticias />

                    <div className='input-field col s12'>
                        <input 
                            type='submit' 
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value='Buscar'
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;