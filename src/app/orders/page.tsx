'use client'
import React, { useState, useEffect } from 'react';
import{selectSoldRows} from "./actions"
import { selectSoldNum, selectShoeName, selectShoeSize, selectShoeType } from "./actions";

interface InventoryItem {
  id: string;
  type: string;
  size: string;
  quantity: number;

}

const ITEMS_PER_PAGE = 6;

const OrdersPlaced: React.FC = () => {
  // Placeholder data for inventory items

  const [placeholderQuantity, setPlaceholderQuantity] = useState<InventoryItem[]>([]);
  const [soldRows, setSoldRows] = useState<Array<number> | null> (null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalItems, setTotalItems] = useState<number>(0);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await selectSoldRows();
        setSoldRows(result);
        setTotalItems(result.length);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updatePlaceholderQuantity = async () => {
      if (soldRows !== null) {
        setLoading(true);
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, soldRows.length);

        const updatedQuantity = await Promise.all(
          soldRows.slice(startIndex, endIndex).map(async (id) => {
            const shoetype = await selectShoeType(id);
            const size = await selectShoeSize(id);
            const type = await selectShoeName(shoetype);
            const quantity = await selectSoldNum(id);

            return { id: id.toString(), type, size: size.toString(), quantity };
          })
        );
        setPlaceholderQuantity(updatedQuantity);
        setLoading(false);
      }
    };

    updatePlaceholderQuantity();
  }, [soldRows, currentPage]);

  const handleNextPage = () => {
    if (currentPage * ITEMS_PER_PAGE < totalItems) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  console.log("Current Page:", currentPage);
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  console.log("Total Pages:", totalPages);

  return (
    <main className="flex bg-white justify-center min-h-screen">
      <div className="bg-white text-black flex flex-col items-left p-7">
        <h1 className="text-3xl p-10 pb-15 pl-16">Orders Placed</h1>
        <div className="w-full max-w-md">
          {loading ? (
            <p>Loading...</p>
          ) : (
            placeholderQuantity.map((item) => (
              <div key={item.id} className="bg-slate-200 rounded-lg p-5 mb-2.5">
                <p>{`${item.type} - Size ${item.size}`}</p>
                <p>{`Quantity: ${item.quantity}`}</p>
              </div>
            ))
          )}
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage * ITEMS_PER_PAGE >= totalItems}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrdersPlaced;
