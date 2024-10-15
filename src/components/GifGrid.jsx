import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    console.log({isLoading})

    // useEffect sirve para ejecutar efectos secundarios es decir
    // cuando el counter cambie quiero disparar un efecto
    // con use identificamos que es un hook
    // Si dejo las dependencias vacías significa que solo se ejecutaran
    
    // const [images, setImages] = useState([])

    // Aquí useEffect está retornando una promesa
    // lo cual me da error porque useEffect debería devolverme una función
    // y no una promesa
    // useEffect( async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }, [ ])
    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }
    // useEffect(() => {
    //     getImages();
    // }, [])

    // Realmente la peticion getGifs debería estar aquí?
    // Aquí hacemos una petición al servidor
    // getGifs( category )

    // Si aquí pongo setCounter() se crearía un ciclo infinito porque
    // cada que se llama setCounter() se renderiza la función

    return (
        <>
            <h3>{ category }</h3>
            {
                /*
                    isLoading && (<h2>Cargando...</h2>)
                */
                /*
                        <LoadingMessage isLoading={ isLoading } />
                */
                isLoading
                ? ( <h2>Cargando...</h2> )
                : null
            }

            {/* <h5>{ counter }</h5> */}
            {/* La razón principal por la cual coloco una funcion flecha */}
            {/* es porque el método onClick ejecuta la función  */}
            {/* hasta que se haga click es decir si solo hiciera setCounter */}
            {/* se ejecutaría la función sin esperar a que se haga click */}
            {/* <button onClick={() => setCounter(counter + 1)}>+1</button> */}
            <div className='card-grid'>
                {
                    images.map( image => (
                        <GifItem 
                            key={image.id} 
                            {...image }
                        />
                    ))
                }
            </div>

        </>
    )
}