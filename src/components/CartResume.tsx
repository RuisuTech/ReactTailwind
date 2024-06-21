import React from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { RootState } from "../store"; // Ajusta el path según tu estructura de carpetas

interface CartResumeProps {
  price: number;
}

function CartResume({ price }: CartResumeProps) {
  // Obtener el total de productos desde el estado global usando useSelector de Redux
  const total = useSelector((store: RootState) => store.products.total);

  // Formatear el precio usando Intl.NumberFormat para mostrarlo correctamente
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedPrice = formatter.format(price);

  // Función para manejar la compra
  const handlePurchase = () => {
    // Mostrar un modal de confirmación usando SweetAlert2
    Swal.fire({
      title: "¿Confirmar compra?",
      text: "Si o No",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        // Acción cuando el usuario confirma la compra
        // Por ejemplo, eliminar todos los productos del carrito del localStorage
        localStorage.removeItem("cart");

        // Mostrar un mensaje de éxito usando SweetAlert2
        Swal.fire({
          title: "Se confirmó la compra",
          text: "Reinicia la página",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="bg-[#04585d] text-white rounded-[5px] p-[20px] m-[20px] min-h-[220px] break-words justify-between w-full sm:w-[340px] flex flex-col">
      <div className="grow flex flex-col justify-between">
        {/* Título del resumen */}
        <h2 className="flex font-bold text-[20px] sm:text-[22px]">
          Resumen del pedido
        </h2>
        {/* Mostrar el total del pedido */}
        <div className="flex justify-between items-center text-[20px]">
          <h3>Total</h3>
          <strong className="text-[20px]">${formattedPrice}</strong>
        </div>
        {/* Información adicional, como impuestos */}
        <small className="pb-[10px]">
          Incluye impuesto PAIS y percepción AFIP.
        </small>
      </div>
      {/* Botón para realizar la compra */}
      <button
        className="w-full h-[35px] sm:h-[40px] bg-[#008c91] text-white font-bold border-none rounded-[10px] hover:bg-[#00b2b7]"
        id="buy"
        type="button"
        onClick={handlePurchase}
      >
        COMPRAR
      </button>
    </div>
  );
}

export default CartResume;
