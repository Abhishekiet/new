import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const Data =[
    
   {
      id: 1 ,
      name: "Traditional kurti",
      rate: 2700,
      incart: false,
      image:"Images/1.jpg" ,
      info: " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash", 
              
    },

    {
        id: 2,
        name: "Traditional kurti",
        rate: 1719,
        incart: false,
        image:"Images/2.jpg" ,
        info: " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash", 
      } ,

      {
        id: 3,
        name: "Indian Saree",
        rate: 1719,
        incart: false,
        image:"Images/3.jpg" ,
        info: "Yellow and green printed straight kurta, has a notched round neck,three-quarter sleeves, straight hem, side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial Hand-wash",
      } ,

      {
        id: 4,
        name: "Traditional kurti",
        rate: 2700,
        incart: false,
        image:"Images/4.jpg" ,
        info: " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash",
      } ,

      {
        id: 5,
        name: "Traditional kurti",
        rate: 1719,
        incart: false,
        image:"Images/5.jpg" ,
        info:  " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash",
      } ,

      {
        id: 6,
        name: "Traditional kurti",
        rate: 1719,
        incart: false,
        image:"Images/6.jpg" ,
        info:  " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash",
      } ,

      {
        id: 7,
        name: "Traditional kurti",
        rate: 2700,
        incart: false,
        image:"Images/7.jpg" ,
        info:  " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash",
      } ,

      {
        id: 8,
        name: "Traditional kurti",
        rate: 1719,
        incart: false,
        image:"Images/8.jpg" ,
        info:  " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash",
      } ,

      {
        id: 9,
        name: "Traditional kurti",
        rate: 2700,
        incart: false,
        image:"Images/9.jpg" ,
        info:  " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash",
      } ,

      {
        id: 10,
        name: "Traditional kurti",
        rate: 1719,
        incart: false,
        image:"Images/10.jpg" ,
        info:  " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash",
      } ,

      {
        id: 11 ,
        name: "Traditional kurti",
        rate: 1719,
        incart: false,
        image: "Images/11.jpg" ,
        info: " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash",
      } ,
  
      {
          id: 12,
          name: "Traditional kurti",
          rate: 2700,
          incart: false,
          image:"Images/12.jpg" ,
          info:  " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash",
        } ,
  
        {
          id: 13,
          name: "Traditional kurti",
          rate: 1719,
          incart: false,
          image:"Images/13.jpg" ,
          info:  " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash",
        } ,
  
        {
          id: 14,
          name: "Traditional kurti",
          rate: 2700,
          incart: false,
          image:"Images/14.jpg" ,
          info:  " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash",
        } ,
  
        {
          id: 15,
          name: "Traditional kurti",
          rate: 1719,
          incart: false,
          image: "Images/15.jpg" ,
          info:  " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash",
        } ,
  
        {
          id: 16,
          name: "Indian Saree",
          rate: 2700,
          incart: false,
          image: "Images/16.jpg" ,
          info: "Yellow and green printed straight kurta, has a notched round neck,three-quarter sleeves, straight hem, side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial Hand-wash",
        } ,
  
        {
          id: 17,
          name:"Design Kurta with Palazzos" ,
          rate: 1719,
          incart: false,
          image: "Images/17.jpg" ,
          info:  " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash",
        } ,
  
        {
          id: 18,
          name: "Design Kurta with Palazzos",
          rate: 2700,
          incart: false,
          image: "Images/18.jpg" ,
          info: " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash" ,
        } ,
  
        {
          id: 19,
          name: "Design Kurta with Palazzos",
          rate: 1719,
          incart: false,
          image: "Images/19.jpg" ,
          info:  " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash",
        } ,
  
        {
          id: 20,
          name: "Design Kurta with Palazzos",
          rate:2700 ,
          incart: false,
          image: "Images/20.jpg" ,
          info:  " Yellow and green printed straight kurta , has a notched round neck , three-quarter sleeves , straight hem , side slits  Size & Fit The model (height 5'8) is wearing a size S Mateerial -Hand-wash",
        } ,

    ]

    export default Data;