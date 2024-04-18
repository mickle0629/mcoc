/**
 * Starting page. Hosts the information entry component to get info from customers.
 */

import { Fira_Sans_Extra_Condensed } from "next/font/google";
import EntryForm from "./lib/components/forms";
import { BulkOrder, Parent, Child, Shoe } from "./lib/definitions";

export default function Home() {
  //master insert data object
  const orderData: BulkOrder = {
    parent: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      zip: ''
    },
    shoes: []
  };
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* registration form */}
      <div className="w-auto content-center">
        {/* Modifies insertData */}
        <EntryForm bulkOrder={orderData} />
      </div>

      {/* footer */}
      <div className="h-12 mb-3 p-1 border-t-2 border-gray-400">
        {/*TODO: has too much bottom padding/margin */}
        <p className="text-black text-center pt-3">Copyright 2024</p>
      </div>
    </main>
  );
}
