import React, { useEffect, useState } from 'react'
import './home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import background from '../../assets/background.mp4';
import LoadingScreen from '../LoadingScreen/LoadingScreen.jsx';
function Home() {
  const [loading,setLoading]=useState(true);
  const [meat, setMeat] = useState([
    {
      name: "BBQ",
      image: "./image/animal/BBQ.jpg"
    },
    {
      name: "Hamburger",
      image: "./image/animal/hamburger-1238246_1280.jpg"
    },
    {
      name: "Chicken",
      image: "./image/animal/chicken-1199243_1280.jpg"
    }
  ]);
  const [vegetable, setVegetable] = useState([
    {
      name: "Cucumber",
      image: "./image/Vegetarian/cucumbers.jpg"
    },
    {
      name: "Potato",
      image: "./image/Vegetarian/potatoes-544073_1280.jpg"
    },
    {
      name: "Green bean",
      image: "./image/Vegetarian/beans-3688585_1280.jpg"
    }
  ]);
  const [fruit, setFruit] = useState([
    {
      name: "Apple",
      image: "./image/fruit/apples.jpg"
    },
    {
      name: "Banana",
      image: "./image/fruit/bananas-3474872_1280.jpg"
    },
    {
      name: "Watermelon",
      image: "./image/fruit/watermelon.jpg"
    }
  ]);
  const [sweet, setSweet] = useState([
    {
      name: "Cake",
      image: "./image/sweet/cake.jpg"
    },
    {
      name: "Donuts",
      image: "./image/sweet/doughnut.jpg"
    },
    {
      name: "Ice cream",
      image: "./image/sweet/ice-cream.jpg"
    }
  ]);
  const loadingVideo=()=>{
    setLoading(false);
  };
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  document.title=`Wasifati: Home`;
  
  return (
    <div className='home'>
      {
        loading?
        <>
          <LoadingScreen/>
          <header className='header'>
            <div className="overlay"><video onLoadedData={loadingVideo} src={background} className='backVideo' autoPlay muted loop /></div>

            <div className="content">
              <h1 className="mainTitle">
                wasifati
              </h1>
              <a href="#Recipes" className='explor'>explore <span className='icon'><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></span></a>
            </div>
          </header>
          <section className="Recipes" id='Recipes'>
            <div className="container">
              <h2 className="mainTitle">Recipes</h2>
              <div className="meat Recipe">
                <div className="titleDiv">
                  <h3 className="subTitle">meat</h3>
                </div>
                <div className="items">
                  <div className="row">
                    {
                      meat.map((ele,index)=>{
                        return(
                          <div className="col-md-4" key={index}>
                          <div className="item my-md-5">
                            <img src={`${ele.image}`} alt="" />
                            <div className="info">
                              <h4 className="name">
                                {
                                  ele.name
                                }
                              </h4>
                              <Link className='more' to={`/recipes?type=${ele.name}&image=${ele.image}`}>Click to See Recipes</Link>
                            </div>
                          </div>
                        </div>
                        )
                      })
                    }
                  </div>

                
                </div>
                <Link className="showMore" to="/fooditems?type=meat">
                  show more
                </Link>
              </div>
              <div className="vegetable Recipe">
                <div className="titleDiv">
                  <h3 className="subTitle">vegetable</h3>
                </div>
                <div className="items">
                  <div className="row">
                    {
                      vegetable.map((ele,index)=>{
                        return(
                          <div className="col-md-4" key={index}>
                          <div className="item my-md-5">
                            <img src={`${ele.image}`} alt="" />
                            <div className="info">
                              <h4 className="name">
                                {
                                  ele.name
                                }
                              </h4>
                              <Link className='more' to={`/recipes?type=${ele.name}&image=${ele.image}`}>Click to See Recipes</Link>
                            </div>
                          </div>
                        </div>
                        )
                      })
                    }
                  </div>

                </div>
                <Link className="showMore" to="/fooditems?type=vegetable">
                  show more
                </Link>
              </div>
              <div className="fruit Recipe">
                <div className="titleDiv">
                  <h3 className="subTitle">fruit</h3>
                </div>
                <div className="items">
                  <div className="row">
                    {
                      fruit.map((ele,index)=>{
                        return(
                          <div className="col-md-4" key={index}>
                          <div className="item my-md-5">
                            <img src={`${ele.image}`} alt="" />
                            <div className="info">
                              <h4 className="name">
                                {
                                  ele.name
                                }
                              </h4>
                              <Link className='more' to={`/recipes?type=${ele.name}&image=${ele.image}`}>Click to See Recipes</Link>
                            </div>
                          </div>
                        </div>
                        )
                      })
                    }
                  </div>

                </div>
                <Link className="showMore" to="/fooditems?type=fruit">
                  show more
                </Link>
              </div>
              <div className="sweet Recipe">
                <div className="titleDiv">
                  <h3 className="subTitle">sweet</h3>
                </div>
                <div className="items">
                  <div className="row">
                    {
                      sweet.map((ele,index)=>{
                        return(
                          <div className="col-md-4" key={index}>
                          <div className="item my-md-5">
                            <img src={`${ele.image}`} alt="" />
                            <div className="info">
                              <h4 className="name">
                                {
                                  ele.name
                                }
                              </h4>
                              <Link className='more' to={`/recipes?type=${ele.name}&image=${ele.image}`}>Click to See Recipes</Link>
                            </div>
                          </div>
                        </div>
                        )
                      })
                    }
                  </div>

                </div>
                <Link className="showMore" to="/fooditems?type=sweet">
                  show more
                </Link>
              </div>
            </div>
          </section>
        </>
        :
        <>
          <header className='header'>
            <div className="overlay"><video onLoadedData={loadingVideo} src={background} className='backVideo' autoPlay muted loop /></div>

            <div className="content">
              <h1 className="mainTitle">
                wasifati
              </h1>
              <a href="#Recipes" className='explor'>explore <span className='icon'><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></span></a>
            </div>
          </header>
          <section className="Recipes" id='Recipes'>
            <div className="container">
              <h2 className="mainTitle">Recipes</h2>
              <div className="meat Recipe">
                <div className="titleDiv">
                  <h3 className="subTitle">meat</h3>
                </div>
                <div className="items">
                  <div className="row">
                    {
                      meat.map((ele,index)=>{
                        return(
                          <div className="col-md-4" key={index}>
                          <div className="item my-md-5">
                            <img src={`${ele.image}`} alt="" />
                            <div className="info">
                              <h4 className="name">
                                {
                                  ele.name
                                }
                              </h4>
                              <Link className='more' to={`/recipes?type=${ele.name}&image=${ele.image}`}>Click to See Recipes</Link>
                            </div>
                          </div>
                        </div>
                        )
                      })
                    }
                  </div>

                
                </div>
                <Link className="showMore" to="/fooditems?type=meat">
                  show more
                </Link>
              </div>
              <div className="vegetable Recipe">
                <div className="titleDiv">
                  <h3 className="subTitle">vegetable</h3>
                </div>
                <div className="items">
                  <div className="row">
                    {
                      vegetable.map((ele,index)=>{
                        return(
                          <div className="col-md-4" key={index}>
                          <div className="item my-md-5">
                            <img src={`${ele.image}`} alt="" />
                            <div className="info">
                              <h4 className="name">
                                {
                                  ele.name
                                }
                              </h4>
                              <Link className='more' to={`/recipes?type=${ele.name}&image=${ele.image}`}>Click to See Recipes</Link>
                            </div>
                          </div>
                        </div>
                        )
                      })
                    }
                  </div>

                </div>
                <Link className="showMore" to="/fooditems?type=vegetable">
                  show more
                </Link>
              </div>
              <div className="fruit Recipe">
                <div className="titleDiv">
                  <h3 className="subTitle">fruit</h3>
                </div>
                <div className="items">
                  <div className="row">
                    {
                      fruit.map((ele,index)=>{
                        return(
                          <div className="col-md-4" key={index}>
                          <div className="item my-md-5">
                            <img src={`${ele.image}`} alt="" />
                            <div className="info">
                              <h4 className="name">
                                {
                                  ele.name
                                }
                              </h4>
                              <Link className='more' to={`/recipes?type=${ele.name}&image=${ele.image}`}>Click to See Recipes</Link>
                            </div>
                          </div>
                        </div>
                        )
                      })
                    }
                  </div>

                </div>
                <Link className="showMore" to="/fooditems?type=fruit">
                  show more
                </Link>
              </div>
              <div className="sweet Recipe">
                <div className="titleDiv">
                  <h3 className="subTitle">sweet</h3>
                </div>
                <div className="items">
                  <div className="row">
                    {
                      sweet.map((ele,index)=>{
                        return(
                          <div className="col-md-4" key={index}>
                          <div className="item my-md-5">
                            <img src={`${ele.image}`} alt="" />
                            <div className="info">
                              <h4 className="name">
                                {
                                  ele.name
                                }
                              </h4>
                              <Link className='more' to={`/recipes?type=${ele.name}&image=${ele.image}`}>Click to See Recipes</Link>
                            </div>
                          </div>
                        </div>
                        )
                      })
                    }
                  </div>

                </div>
                <Link className="showMore" to="/fooditems?type=sweet">
                  show more
                </Link>
              </div>
            </div>
          </section>
        
        </>
      }
      
    </div>

  )
}

export default Home