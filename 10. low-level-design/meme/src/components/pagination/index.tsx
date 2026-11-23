import { useEffect, useState } from "react";

type Product = {
   id: number;
   price: number;
   title: string;
   description: string;
   discountPercentage: number;
   thumbnail: string;
};

type ProductsResponse = {
   products: Product[];
   total: number;
   skip: number;
   limit: number;
};

const LIMIT = 10;
const Pagination = () => {
   const [data, setData] = useState<ProductsResponse>();
   const [currentPage, setCurrentPage] = useState(0);
   const fetchData = async () => {
      const response = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage * LIMIT}&select=price,title,description,discountPercentage,thumbnail`);
      const json: ProductsResponse = await response.json();
      console.log({ json });
      setData(json);
   };

   useEffect(() => {
      fetchData();
   }, []);
   console.log(new Array((data?.total || 10) / LIMIT).length);

   return (
      <div>
         <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
               <thead className="bg-gray-50">
                  <tr>
                     <th className="px-3 py-3 text-left font-semibold text-gray-700">ID</th>
                     <th className="px-6 py-3 text-left font-semibold text-gray-700">Image</th>
                     <th className="px-6 py-3 text-left font-semibold text-gray-700">Title</th>
                     <th className="px-6 py-3 text-left font-semibold text-gray-700">Description</th>
                     <th className="px-6 py-3 text-left font-semibold text-gray-700">Price</th>
                     <th className="px-6 py-3 text-left font-semibold text-gray-700">Discount</th>
                  </tr>
               </thead>

               <tbody className="divide-y divide-gray-200 bg-white">
                  {data?.products.map((item, index) => (
                     <tr key={item.id} className="hover:bg-gray-50">
                        <td className="whitespace-nowrap px-3 py-2 text-gray-900">{index + 1 + currentPage * LIMIT}</td>

                        <td className="px-3 py-2">
                           <img src={item.thumbnail} alt={item.title} className="h-16 w-16 rounded-md object-cover" />
                        </td>

                        <td className="whitespace-nowrap px-3 py-2 font-medium text-gray-900">{item.title}</td>

                        <td className="max-w-md px-3 py-2 text-gray-600 line-clamp-2">
                           <p className="line-clamp-2">{item.description}</p>
                        </td>

                        <td className="whitespace-nowrap px-3 py-2 font-medium text-gray-900">{item.price}</td>

                        <td className="whitespace-nowrap px-3 py-2">
                           <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">{item.discountPercentage}</span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <div className="flex space-x-1">
            {/* {Array.from().map((item) => (
               <>hello</>
            ))} */}

            {/* <button className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
               Prev
            </button>
            <button className="min-w-9 rounded-md bg-slate-800 py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
               1
            </button>
            <button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
               2
            </button>
            <button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
               3
            </button>
            <button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
               Next
            </button> */}
         </div>
      </div>
   );
};

export default Pagination;
