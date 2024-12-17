import React from 'react'

const Brands = () => {

   const brandsData = [
    { id: 1, name: 'Brand 11', Price:'20000', description:'Fashion Brands', images:'/10.jpg'},
    { id: 2, name: 'Brand 12', Price:'30000', description:'Luxury Brands', images:'/11.jpg'},
    { id: 3, name: 'Brand 13', Price:'40000', description:'Modern Brands', images:'/12.jpg'},
    { id: 4, name: 'Brand 14', Price:'50000', description:'New Arrival Brands', images:'/13.jpg'},
    { id: 5, name: 'Brand 15', Price:'60000', description:'hot Look Brands', images:'/14.jpg'},
    { id: 6, name: 'Brand 16', Price:'70000', description:'Retro Brands', images:'/15.jpg'},
    { id: 7, name: 'Brand 17', Price:'70000', description:'Retro Brands', images:'/16.jpg'},   
    { id: 8, name: 'Brand 18', Price:'70000', description:'Retro Brands', images:'/17.jpg'},   
    { id: 9, name: 'Brand 19', Price:'70000', description:'Retro Brands', images:'/18.jpg'},



  ]
  return (
    <div>
      <div className="Brand">
        {brandsData.map((brand) => (
          <div key = {brand.id} className= "brand-card">
            <img src={brand.images} alt={brand.name}/>
            <h3>{brand.name}</h3>
            <p>{brand.description}</p>
            <div>${brand.Price}</div>
            <button>Add to Cart</button>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Brands