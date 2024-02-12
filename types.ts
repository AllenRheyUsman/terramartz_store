import { Conversation, Message, User } from "@prisma/client";
import { MouseEventHandler, ReactNode } from "react";

export interface Product {
    desc: ReactNode;
    
    id: string;
    category: Category;
    name: string;
    price: string;
    compareAtPrice: string;
    isFeatured: boolean;
    size: Size;
    color: Color;
    images: Image[]
  };
  
  export interface Image {
    id: string;
    url: string;
  }
  
  export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
  };
  
  export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
  };
  
  export interface Size {
    id: string;
    name: string;
    value: string;
  };
  
  export interface Color {
    id: string;
    name: string;
    value: string;
  };



  export type FullMessageType = Message & {
    sender: User, 
    seen: User[]
  };
  
  export type FullConversationType = Conversation & { 
    users: User[]; 
    messages: FullMessageType[]
  };
  

  export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }