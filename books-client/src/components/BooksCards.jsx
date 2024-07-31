import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaCartShopping } from 'react-icons/fa6';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const BooksCards = ({ books, headline }) => { // Destructure books and headline from props
  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>
        {headline}
      </h2>

      {/* book cards */}
      <div className="mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {
            books.map(book => (
              <SwiperSlide key={book.book_id}> {/* Corrected key prop */}
                <Link to={`/api/book/${book.book_id}`}>
                  <div className='relative transform transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg overflow-hidden'>
                    <img src={book.imageURL} alt={book.bookTitle} className='h-96 w-full object-cover' /> {/* Added alt text */}
                    <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                      <FaCartShopping className='w-4 h-4 text-white' />
                    </div>
                  </div>
                  <div className='p-4'>
                    <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                      {book.bookTitle}
                    </h3>
                    <p className='text-gray-700 dark:text-gray-400'>
                      {book.authorName}
                    </p>
                    <p className='text-lg font-semibold text-gray-900 dark:text-white mt-2'>
                      $10.00
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
}

export default BooksCards;
