import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/LoadingScreen.jsx';
import './recipes.css';
function Recipes() {
    const [loading,setLoading]=useState(true);
    let [searchParams, setSearchParams] = useSearchParams();
    let navegat=useNavigate();
    let [recipes, setRecipes] = useState([]);
    let [dataToShow, setDataToShow] = useState([]);
    let [image, setImage] = useState('');
    let [name, setName] = useState('');
    let [renderComponent, setRenderComponent] = useState(false);
    let get = false;
    const getData = async () => {
        try {
            let Name = searchParams.get('type');
            renderComponent = true;
            let { data } = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${Name}`);
            setLoading(false);
            console.log('hi');
            recipes = data.recipes;
            setRecipes(recipes);
            setDataToShow(recipes);
        } catch {
            navegat('/*');
        }
    };
    const search = () => {
        let searchWord = document.querySelector('.searchInput').value;
        let searchResult = [];
        for (let index = 0; index < dataToShow.length; index++) {
            if (dataToShow[index].title.toLowerCase().includes(searchWord.toLowerCase())) {
                searchResult.push(dataToShow[index]);
            }

        }
        setDataToShow(searchResult);
    };
    const reset = () => {
        setDataToShow(recipes);
        document.querySelector('.searchInput').value = "";
    };
    useEffect(() => {
        let Name = searchParams.get('type');
        document.title=`Wasifati: ${Name}`;
        setName(Name);
        let img = searchParams.get('image');
        setImage(img);
        if (!renderComponent)
            getData();
    }, []);
    window.scrollTo(0, 0);
    
    return (


        <div className='recipes'>
            {
        loading?
        <>
          <LoadingScreen/>
        </>
        :
        <>
            <header className='header'>

                <div className="container">
                    <div className="content">
                        <div className="overlay">
                            <img src={image} alt="" />
                        </div>
                        <h1 className='mainTitle'>{name}</h1>
                        <div className="searchDiv">
                            <div className="input-group mb-3">
                                <button className="input-group-text" id="basic-addon2" onClick={reset}>Reset</button>
                                <input type="text" className="form-control searchInput" placeholder="Search for a specific recipe" />
                                <button className="input-group-text" id="basic-addon2" onClick={search}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
            <section className='food'>
                <div className="container">
                    <div className="content">
                        <h2 className='subTitle'>Recipes</h2>
                        <div className="items">
                            <div className="row">

                                {
                                    dataToShow.length > 0 ?
                                        <>
                                            {
                                                dataToShow.map((ele, index) => {
                                                    return (
                                                        <div className="col-md-4" key={index}>
                                                            <div className="item my-md-5">
                                                                <img src={`${ele.image_url}`} alt="" />
                                                                <div className="info">
                                                                    <h4 className="name">
                                                                        {
                                                                            ele.title
                                                                        }
                                                                    </h4>
                                                                    <Link target="_blank" className='more' to={`${ele.source_url}`}>Click to See Recipe</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })

                                            }
                                        </>
                                        :
                                        <>
                                            <div classname="my-5 col-12">
                                                <div className="alert alert-info" role="alert">
                                                    Sorry, there are no results:(
                                                </div>
                                            </div>

                                        </>
                                }
                            </div>


                        </div>
                    </div>

                </div>
            </section>
        </>
      }
        </div>


    )
}

export default Recipes