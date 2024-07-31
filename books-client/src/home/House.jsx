import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

function home() {
  return (
    <div className=''>
      <Banner/>
      <BestSellerBooks/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </div>
  )
}

export default home
