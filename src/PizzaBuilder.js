import pizzaImage from './Pizza.jpg' 
const PizzaBuilder = () => {
    return (
        <>  <div id='pizzaBuilder'>
            
            <img
                src={pizzaImage}
                alt='pizza image'
                className='pizzaImage'
            />
            <h1
                className='title'
            >build a pizza</h1>
            <form id="pizza-form" >
                <span>
                    <p
                        id='name-title'
                        className='name'
                    >Name: </p>
                    <input
                        type='text'
                        placeholder='Enter Name'
                        id='enter-name'
                        className='name'
                    ></input>
                </span>
                
            </form>
            </div>
        </>
    )
}
export default PizzaBuilder