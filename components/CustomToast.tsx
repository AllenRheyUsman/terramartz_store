// ImageToast.tsx
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ImageToastProps {
  image: string;
  title: string;
  description: string;
  price: number;
  customer:string;
}

const ImageToast: React.FC<ImageToastProps> = ({ image, title, description, price, customer }) => {
  return (
    <div className="toast-container">
      <img src={image} alt={title} className="toast-image" width={50}/>
      <div className="toast-content">
     
      <p>
        {customer}
      </p>
      <p>Just Purchased</p>
        <h4 className="toast-title">{title}</h4>
        
        <p className="toast-description">{description}</p>
        <p className="toast-price">${price}</p>
      </div>
    </div>
  );
};

export const showToast = (image: string, title: string, description: string, price: number, customer: string) => {
  toast(<ImageToast image={image} title={title} description={description} price={price} customer={customer}/>, {
    autoClose: 5000, // Adjust the duration as needed
    position: 'bottom-left', // Set the position to bottom-left
  });
};

export const ImageToastContainer = () => {
  return <ToastContainer />;
};
