import React from 'react';

function Modules() {
  return (
    <div className="w-full flex flex-col">
      <div className="text-center my-4">
        <h2 className="text-3xl underline mb-4">Core Modules</h2>
        Core modules provide Phooty&apos;s main functionality.
      </div>
      <div>
        Module Listing
      </div>
      <div className="text-center my-4">
        <h2 className="text-3xl underline mb-4">Utility Modules</h2>
        Utility modules offer benefits that, while not neccessarily required
        by the Core Modules, can provide some additional functionality, and
        make bootstrapping the Simulator a little easier.
      </div>
    </div>
  );
}

export default Modules;
