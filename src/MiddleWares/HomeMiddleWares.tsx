// import React from "react";
// import { ProductListParams, FetchProductsParam  } from '../TypesCheck/HomeProps';
// import axios from "axios";

// interface ICatProps {
//     setGetCategory: React.Dispatch<React.SetStateAction<ProductListParams[]>>
// }

// interface IProdByCatProps{
//     catID: string;
//     setGetProductsByCatID: React.Dispatch<React.SetStateAction<ProductListParams[]>>;
// }

// export const fetchCategories = async ({setGetCategory}: ICatProps) => {
//     try {
//         const response = await axios.get("http://10.106.22.132:9000/category/getAllCategories");
//         console.log("API Response",response.data);

//         if(Array.isArray(response.data)){
//             const fixedData = response.data.map(item=>({
//                 ...item,
//                 images: item.images.map((img: string)=>img.replace("http://localhost","http://10.106.22.132"))
//             }));
//             setGetCategory(fixedData);
//         }else
//         {
//             console.warn("fetchCategories: dữ liệu api ko phải là mảng",response.data);
//             setGetCategory([]);
//         }
//     } catch (error) {
//         console.log("Axios get error", error);
//         setGetCategory([]);
//     }
// }

// export const fetchProductsByCatID = async ({catID, setGetProductsByCatID}: IProdByCatProps) => {
//     try {
//         const response:FetchProductsParam  = await axios.get(`http://10.106.22.132:9000/product/getProductByCatID/${catID}`);
//         console.log("API Response",response.data);
        
//         if(Array.isArray(response.data)){
//             const fixedData = response.data.map(item=>({
//                 ...item,
//                 images: item.images.map((img: string)=>img.replace("http://localhost","http://10.106.22.132"))
//             }));
//             setGetProductsByCatID(fixedData);
//         }else
//         {
//             console.warn("fetchProductsByCatID: dữ liệu api ko phải là mảng",response.data);
//             setGetProductsByCatID([]);
//         }
//     } catch (error) {
//         console.log("Axios get error", error);
//         setGetProductsByCatID([]);
//     }
// }

// export const fetchFeaturedProducts = async ({ setFeaturedProducts, isFeatured }: { setFeaturedProducts: React.Dispatch<React.SetStateAction<ProductListParams[]>>, isFeatured: boolean }) => {
//     try {
//         const response:FetchProductsParam = await axios.get(`http://10.106.22.132:9000/product/getFeaturedProducts/${isFeatured}`);
//         setFeaturedProducts(response.data.Products);
//     } catch (error) {
//         console.error("Error fetching featured products:", error);
//     }
// };


import React from "react";
import { ProductListParams, FetchProductsParam } from "../TypesCheck/HomeProps";
import axios from "axios";

interface ICatProps {
    setGetCategory: React.Dispatch<React.SetStateAction<ProductListParams[]>>;
}

interface IProdByCatProps {
    catID: string;
    setGetProductsByCatID: React.Dispatch<React.SetStateAction<ProductListParams[]>>;
}

interface IFeaturedProps {
    isFeatured: boolean;
    setFeaturedProducts: React.Dispatch<React.SetStateAction<ProductListParams[]>>;
}

const BASE_URL = "http://10.106.22.132"; // Định nghĩa BASE_URL chung

// Lấy danh mục sản phẩm
export const fetchCategories = async ({ setGetCategory }: ICatProps) => {
    try {
        const response = await axios.get(`${BASE_URL}:9000/category/getAllCategories`);
        console.log("API Response", response.data);

        if (Array.isArray(response.data)) {
            const fixedData = response.data.map(item => ({
                ...item,
                images: item.images.map((img: string) => img.replace("http://localhost", BASE_URL)),
            }));
            setGetCategory(fixedData);
        } else {
            console.warn("fetchCategories: Dữ liệu API không phải là mảng", response.data);
            setGetCategory([]);
        }
    } catch (error) {
        console.log("Axios get error", error);
        setGetCategory([]);
    }
};

// Lấy sản phẩm theo danh mục
export const fetchProductsByCatID = async ({ catID, setGetProductsByCatID }: IProdByCatProps) => {
    try {
        const response: FetchProductsParam = await axios.get(`${BASE_URL}:9000/product/getProductByCatID/${catID}`);
        console.log("API Response", response.data);

        if (Array.isArray(response.data)) {
            const fixedData = response.data.map(item => ({
                ...item,
                images: item.images.map((img: string) => img.replace("http://localhost", BASE_URL)),
            }));
            setGetProductsByCatID(fixedData);
        } else {
            console.warn("fetchProductsByCatID: Dữ liệu API không phải là mảng", response.data);
            setGetProductsByCatID([]);
        }
    } catch (error) {
        console.log("Axios get error", error);
        setGetProductsByCatID([]);
    }
};

// Lấy sản phẩm nổi bật
export const fetchFeaturedProducts = async ({ isFeatured, setFeaturedProducts }: IFeaturedProps) => {
    try {
        const response = await axios.get(`${BASE_URL}:9000/product/getFeaturedProducts/${isFeatured}`);
        console.log("API Response", response.data);

        if (Array.isArray(response.data)) {
            const fixedData = response.data.map(item => ({
                ...item,
                images: item.images.map((img: string) => img.replace("http://localhost", BASE_URL)),
            }));
            setFeaturedProducts(fixedData);
        } else {
            console.warn("fetchFeaturedProducts: Dữ liệu API không phải là mảng", response.data);
            setFeaturedProducts([]);
        }
    } catch (error) {
        console.error("Error fetching featured products:", error);
        setFeaturedProducts([]);
    }
};
