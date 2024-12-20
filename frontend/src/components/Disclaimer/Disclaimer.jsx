import React from "react";

const Disclaimer = () => {
  return (
    <div className="bg-gray-800 text-gray-400 text-sm mx-2 lg:mx-32 px-2 lg:px-6 py-4 text-center border-t border-gray-700">
      <p>
        La información proporcionada es únicamente educativa y no constituye asesoramiento financiero ni recomendaciones de inversión. El trading implica riesgos significativos, incluyendo la pérdida total o parcial del capital. Las decisiones financieras son responsabilidad exclusiva del usuario.
      </p>
      <p className="mt-2">
        No ofrecemos inversiones, promesas de retorno financiero ni garantías de resultados específicos. Todos los contenidos son con fines 100% educativos.
      </p>
      <p className="mt-2">
        Meta y sus empresas no están asociadas ni respaldan esta plataforma. No son responsables de las decisiones o acciones derivadas de la interacción con este contenido.
      </p>
    </div>
  );
};

export default Disclaimer;
