

import useGifs from '../hooks/useGifs';
import Loader from './Loader';




// const AIP_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Gifs = () => {


    // const [gif, setGif] = useState('');
    // const [loading, setloading] = useState(false);

    // async function featchdata() {
    //     // const url = `https //api.giphy.com/v1/gifs/random?api_key=${AIP_KEY}`;

    //     setloading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=O3AUOfFNCpMAyiLNkx939MtuNJWA4roa&tag=&rating=g`

    //     const { data } = await axios.get(url);
    //     const imgsource = data.data.images.downsized_large.url;
    //     setGif(imgsource);
    //     setloading(false);

    // }
    // useEffect(() => {
    //     featchdata();
    // }, [])

    const { gif, featchdata, loading } = useGifs();
    return (
        <div className=' main-div w-1/2 bg-slate-400 flex flex-col item-center gap-y-6 rounded-3xl'>
            <h1 className='text-xl font-bold underline uppercase mt-6'>A Random Gifs</h1>
            {
                loading ? (<Loader></Loader>) : (<img src={gif} alt="" width={450} />)
            }
            <button onClick={() => featchdata()}
                className='bg-slate-950 w-3/5 py-2 text-xl text-white rounded-lg mt-6 mb-7'
            >Generate Gif</button>
        </div>
    )
}

export default Gifs
