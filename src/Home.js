import pizzaImage from './Pizza.jpg' 
const Home = () => {
  return (
    <>
        <img
            src={pizzaImage}
            alt='pizza image'
            className='pizzaImage'
        />
        <h1
            className='title'
        >home</h1>
    </>
  )
}
export default Home;