import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/LoadingScreen.jsx';
import './foodItems.css';
function FoodItems() {
  const [loading,setLoading]=useState(true);
  const [dataToShow,setDataToShow]=useState([]);
  const[type,setType]=useState('');
  let [searchParams, setSearchParams] = useSearchParams();
  let navegat=useNavigate();
  let count=0;
    const [meat,setMeat]=useState([
        {
          name:"BBQ",
          image:"./image/animal/BBQ.jpg"
        },
        {
          name:"Hamburger",
          image:"./image/animal/hamburger-1238246_1280.jpg"
        },
        {
          name:"Chicken",
          image:"./image/animal/chicken-1199243_1280.jpg"
        },
        {
          name:"Sausage",
          image:"./image/animal/sausage-556491_1280.jpg"
        },
        {
          name:"Sushi",
          image:"./image/animal/sushi-2853382_1280.jpg"
        },
        {
          name:"Curry",
          image:"./image/animal/curry-7249247_1280.jpg"
        },
        {
          name:"Beef",
          image:"./image/animal/barbecue-1239434_1280.jpg"
        },
        {
          name:"Fish",
          image:"./image/animal/salmon-518032_1280.jpg"
        },
      ]);
      const [vegetable,setVegetable]=useState([
        {
          name:"Cucumber",
          image:"./image/Vegetarian/cucumbers.jpg"
        },
        {
          name:"Potato",
          image:"./image/Vegetarian/potatoes-544073_1280.jpg"
        },
        {
          name:"Green bean",
          image:"./image/Vegetarian/beans-3688585_1280.jpg"
        },
        {
          name:"Carrot",
          image:"./image/Vegetarian/carrots.jpg"
        },
        {
          name:"Lettuce",
          image:"./image/Vegetarian/Lettuce.jpg"
        },
        {
          name:"Pumpkin",
          image:"./image/Vegetarian/harvest-4454745_1280.jpg"
        },
        {
          name:"Tomato",
          image:"./image/Vegetarian/tomatoes-1561565_1280.jpg"
        },
        {
          name:"Zucchini",
          image:"./image/Vegetarian/zucchini-572542_1280.jpg"
        },
        {
          name:"Chickpea",
          image:"./image/Vegetarian/chickpeas-3663027_1280.jpg"
        },
        {
          name:"Lentil",
          image:"./image/Vegetarian/lentils-2790516_1280.jpg"
        },
        {
          name:"Salad",
          image:"./image/Vegetarian/salad-2756467_1280.jpg"
        },
      ]);
      const [fruit,setFruit]=useState([
        {
          name:"Apple",
          image:"./image/fruit/apples.jpg"
        },
        {
          name:"Banana",
          image:"./image/fruit/bananas-3474872_1280.jpg"
        },
        {
          name:"Mango",
          image:"./image/fruit/mango-1534061_1280.jpg"
        },
        {
          name:"Melon",
          image:"./image/fruit/melon.jpg"
        },
        {
          name:"Orange",
          image:"./image/fruit/tangerines.jpg"
        },
        {
          name:"Strawberry",
          image:"./image/fruit/strawberries.jpg"
        },
        {
          name:"Watermelon",
          image:"./image/fruit/watermelon.jpg"
        },
        {
          name:"Pineapple",
          image:"./image/fruit/pineapple.jpg"
        },
      ]);
      const [sweet,setSweet]=useState([
        {
          name:"Cake",
          image:"./image/sweet/cake.jpg"
        },
        {
          name:"Pie",
          image:"./image/sweet/pie.jpg"
        },
        {
          name:"Donuts",
          image:"./image/sweet/doughnut.jpg"
        },
        {
          name:"Chocolate",
          image:"./image/sweet/chocolate.jpg"
        },
        {
          name:"Ice cream",
          image:"./image/sweet/ice-cream.jpg"
        }
      ]);
      useEffect(()=>{
        try{
          let x =searchParams.get('type');
          document.title=`Wasifati: ${x}`;
          setType(x);
          console.log(type);
          if(type=='meat'){
            setDataToShow(meat);
            console.log("meat")
          }
          else if(type=='vegetable'){
            setDataToShow(vegetable);
          }
          else if(type=='fruit'){
            setDataToShow(fruit);
          }
          else if(type=='sweet'){
            setDataToShow(sweet);
          }
          setLoading(false);
        }catch{
          navegat('/*');
        }
      })
      window.scrollTo(0, 0);
  return (
    <div className='foodItems'>
      {
        loading?
        <>
          <LoadingScreen/>
        </>
        :
        <>
          <header className="header">
            <div className="overlay">
              {
                type=='meat'?
                <><img src="./image/animal/meat.jpg" alt="" /></>
                :type=='vegetable'?
                <><img src="./image/Vegetarian/Vegetable.jpg" alt="" /></>
                :<><img src={`./image/${type}/${type}.jpg`}alt="" /></>
                
              }
              
            </div>
            <div className="container">
              <div className="content">
                <h1 className="mainTitle">
                  {type}
                </h1>
              </div>
            </div>
          </header>
          <section className="foodItemsMenue">
              <div className="container">

                <div className="titleDiv">
                  <h2 className="subTitle">{type} Recipe</h2>
                </div>
                <div className="items">
                  <div className="row">
                    {
                      dataToShow.map((ele,index)=>{
                        return(
                          <div className="col-md-4" key={index}>
                          <div className="item my-md-5">
                            <img src={`${ele.image}`} alt="" />
                            <div className="info">
                              <h3 className="name">
                                {
                                  ele.name
                                }
                              </h3>
                              <Link className='more' to={`/recipes?type=${ele.name}&image=${ele.image}`}>Click to See Recipes</Link>
                            </div>
                          </div>
                        </div>
                        )
                      })
                    }
                  </div>

                
                </div>
              </div>
              
          </section>  
        </>
      }
    </div>
  )
}

export default FoodItems