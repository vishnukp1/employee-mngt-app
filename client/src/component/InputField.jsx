import React from "react";

function InputField({ label, type = "text", name, required = true }) {
  return (
    <div className="mb-5">
      <label className="block text-gray-600">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default InputField;
