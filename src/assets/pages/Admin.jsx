import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../../backend/backend";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (
      !image ||
      !title ||
      !size ||
      !subtitle ||
      !price ||
      !description ||
      !rate ||
      !color
    ) {
      alert("Please enter all required fields");
    }
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      };
      const data = {
        title: title,
        subtitle: subtitle,
        image: image,
        size: size,
        price: price,
        description: description,
        rate: rate,
        color: color,
      };
      const response = await axios.post(`${backendUrl}/products`, data, {
        headers: headers,
      });
      console.log(response);
      if (response.data) {
        navigate("/client");
      }
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };

   return (
     <div className="flex items-center justify-center min-h-screen bg-blue-500">
       <div className=" w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
         <div className="mb-5 w-[300px]">
           <label htmlFor="title" className="block text-2xl font-bold">
             Title
           </label>
           <input
             type="text"
             id="title"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
         <div className="mb-5  w-[300px]">
           <label htmlFor="subtitle" className="block text-2xl font-bold">
             Subtitle
           </label>
           <input
             type="text"
             id="subtitle"
             value={subtitle}
             onChange={(e) => setSubtitle(e.target.value)}
             className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
         <div className="mb-5  w-[300px]">
           <label htmlFor="image" className="block text-2xl font-bold">
             Image Address
           </label>
           <input
             type="text"
             id="image"
             value={image}
             onChange={(e) => setImage(e.target.value)}
             className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
         <div className="mb-5  w-[300px]">
           <label htmlFor="size" className="block text-2xl font-bold">
             Size
           </label>
           <input
             type="text"
             id="size"
             value={size}
             onChange={(e) => setSize(e.target.value)}
             className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
         <div className="mb-5  w-[300px]">
           <label htmlFor="price" className="block text-2xl font-bold">
             Price
           </label>
           <input
             type="number"
             id="price"
             value={price}
             onChange={(e) => setPrice(e.target.value)}
             className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
         <div className="mb-5  w-[300px]">
           <label htmlFor="description" className="block text-2xl font-bold">
             Description
           </label>
           <textarea
             id="description"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
             className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
         <div className="mb-5  w-[300px]">
           <label htmlFor="rate" className="block text-2xl font-bold">
             Rate
           </label>
           <input
             type="number"
             id="rate"
             value={rate}
             onChange={(e) => setRate(e.target.value)}
             className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
         <div className="mb-5  w-[300px]">
           <label htmlFor="color" className="block text-2xl font-bold">
             Color
           </label>
           <input
             type="text"
             id="color"
             value={color}
             onChange={(e) => setColor(e.target.value)}
             className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>
         <button
           onClick={handleCreate}
           className="w-[250px] px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
         >
           Create New Product
         </button>
       </div>
     </div>
   );

};

export default Admin;
