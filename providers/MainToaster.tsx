"use client";

import { ImageToastContainer, showToast } from '@/components/CustomToast';
// MainToaster.js
import React, { useEffect, useState } from 'react';
 

 

const MainToaster = () => {
  const products = [
    {
      id: 1,
      image: '/w.png',
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      customer:"asds",
    },
    {
      id: 2,
      image: '/w.png',
      title: 'Product 2',
      description: 'Description for Product 2',
      price: 29.99,
      customer:"asds",
    },
    {
        id: 3,
        image: '/w.png',
        title: 'Product 3',
        description: 'Description for Product 1',
        price: 50.99,
        customer:"asds",
      },
      {
        id: 4,
        customer:"asds",
        image: '/w.png',
        title: 'Product 4',
        description: 'Description for Product 2',
        price: 49.99,
      },
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const toastInterval = setInterval(() => {
      if (currentProductIndex < products.length) {
        const product = products[currentProductIndex];
        showToast(product.image, product.title, product.description, product.price, product.customer) ;
        setCurrentProductIndex((prevIndex) => prevIndex + 1);
      } else {
        // Reset index when all products have been shown
        setCurrentProductIndex(0);
      }
    }, 10000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(toastInterval);
  }, [currentProductIndex, products]);

  return <ImageToastContainer />;
};

export default MainToaster;
