import Header from './components/Header';
import Footer from './components/Footer';
import './components/Layout.css';
import Products from './components/Products';
import SideBar from './components/SideBar';
import { useState } from 'react';

function App() {
  /* ADIM 1: seçilen kategoriyi tutmak için category isimli bir state tanımlayalım ve başlangıç değeri 'electronics' olsun. */
  const [category, setCategory] = useState('electronics');

  /* ADIM 2: seçilen kategoriyi değiştirecek bir change handler fonskiyonu yazalım ve adı handleCatChange olsun. */
  const handleCatChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <>
      <Header />
      <div className="content-section">
        <SideBar handleCatChange={handleCatChange} category={category} />
        <Products category={category} />
      </div>
      <Footer />
    </>
  );
}

export default App;
