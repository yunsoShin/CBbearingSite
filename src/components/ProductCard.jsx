import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { handleDelete } from "../Api/firebase";
import Button from "./ui/Button";

export default function ProductCard({
  product,
  product: { id, image, title, brand, partNumber },
}) {
  const { user } = useAuthContext();
  return (
    <li
      /*onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}*/
      className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105"
    >
      {image && <img className="w-full" src={image} alt={title} />}
      <div className="mt-2 px-2 text-lg flex justify-between items-center">
        <h3 className="truncate">{title}</h3>
        <p className="mb-2 px-2 text-gray-600">{partNumber}</p>
      </div>

      <p className="mb-2 px-2 text-gray-600">{brand}</p>
      <div className="flex justify-end m-1">
        {user && user.isAdmin && (
          <Button
            onClick={() =>
              window.confirm("삭제하시겠습니까?")
                ? handleDelete(product.id)
                    .then(window.alert("삭제완료하였습니다"))
                    .catch((error) => window.alert("다시시도해 주세요"))
                : false
            }
            text={"삭제하기"}
          ></Button>
        )}
      </div>
    </li>
  );
}
