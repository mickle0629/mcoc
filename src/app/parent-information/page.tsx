/**
 * Parent information page.
 */

import EntryForm from "../lib/components/forms";

export default function PartentInfo() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* registration form */}
      <div className="w-auto content-center">
        <EntryForm />
      </div>

      {/* footer */}
      <div className="h-12 mb-3 p-1 border-t-2 border-gray-400">
        {/*TODO: has too much bottom padding/margin */}
        <p className="text-black text-center pt-3">Copyright 2024</p>
      </div>
    </main>
  );
}
