import React from "react";

function AuthCard({ title, children }) {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default AuthCard;
