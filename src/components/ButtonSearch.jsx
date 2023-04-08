import imageRandom from "../utils/ImageRandom"

const ButtonSearch = ({ setarrayImg }) => {
    const randomImage = () =>{
        setarrayImg(imageRandom ([1,2,3,4,5]))
    }
  return (
    <button className='search' onClick={randomImage}>Search</button>
  )
}

export default ButtonSearch