import axios from 'axios';


const Blog = () => {

  axios.get('http://localhost:8000/getProducts')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });


  return (
    <div>
blog
    </div>
  )
}

export default Blog