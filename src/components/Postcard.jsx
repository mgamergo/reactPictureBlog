import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

function Postcard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-72 h-96 bg-gray-100 rounded-xl p-4">
        <div className="w-full h-3/4 mb-4">
          <img
            src={service.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h2 className="text-xl font-bold text-accent-orange">{title}</h2>
      </div>
    </Link>
  );
}

export default Postcard;
