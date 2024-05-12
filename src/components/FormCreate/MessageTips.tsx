import { useState, useEffect } from "react";

type MessageTipsProps = {
  message: string
}



function MessageTips({ message }: MessageTipsProps) {
  const [formattedMessage, setFormattedMessage] = useState("");

  useEffect(() => {
    // Divide el mensaje en secciones
    const sections = message.split(/(?<=\*\*)\s+/);

    // Crea un objeto para almacenar las secciones formateadas
    const formattedSections = {};

    // Recorre las secciones y formatéalas
    sections.forEach((section) => {
      // Divide la sección en título y elementos
      const [title, ...items] = section.split("\n");

      // Formatea el título
      const formattedTitle = `${title}`;

      // Formatea los elementos
      const formattedItems = items.map((item) => `<li class="">${item}</li>`).join("\n");

      // Añade la sección formateada al objeto
      formattedSections[title] = `<p class="mt-4">${formattedTitle}<ul class="font-bold mt-4">${formattedItems}</ul></p>`;
    });

    // Une las secciones formateadas en un único mensaje
    const formattedMessage = Object.values(formattedSections).join("").replace(/\*/g, "\n");

    // Establece el mensaje formateado en el estado
    setFormattedMessage(formattedMessage);
  }, [message]);

  return (
    <div className="p-4 bg-gray-800 rounded-md w-1/2 m-4 text-white">
      <div dangerouslySetInnerHTML={{ __html: formattedMessage }} />
    </div>
  );
}

export default MessageTips;




