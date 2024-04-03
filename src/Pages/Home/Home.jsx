import  { useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';


function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Header handleSearch={handleSearch} />
      <Cards searchTerm={searchTerm} />
    </div>
  )
}

export default Home