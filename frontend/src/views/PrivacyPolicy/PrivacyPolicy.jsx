import React from "react";
import logo from "../../assets/logo/logo_blanco-re.png";
import Footer from "../../components/Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden bg-gray-900">
      {/* Header */}
      <div className="w-full h-14 lg:h-20 flex justify-center items-center border-b-[1px] border-yellow-600">
        <img className="w-14 lg:w-20" src={logo} alt="logo" />
      </div>

      {/* Content */}
      <div className="px-6 py-8 max-w-4xl">
        <h1 className="text-gray-200 text-3xl font-bold mb-6">
          Política de Privacidad de Revolution Academy
        </h1>
        <p className="text-gray-200 text-base mb-4">
          En Revolution Academy, valoramos tu privacidad y estamos comprometidos
          con la protección de los datos personales que compartes con nosotros
          al interactuar con nuestras campañas publicitarias en Meta Ads. Esta
          política explica cómo recopilamos, utilizamos y protegemos tu
          información en el contexto de nuestras actividades publicitarias.
        </p>

        {/* Sections */}
        <Section
          title="1. Información que Recopilamos"
          content={
            <ul className="list-disc list-inside text-gray-200 text-base">
              <li>
                <strong>Datos personales proporcionados por ti:</strong> Nombre,
                correo electrónico, número de teléfono u otra información que
                ingreses voluntariamente en formularios publicitarios.
              </li>
              <li>
                <strong>Datos técnicos:</strong> Información sobre tu
                dispositivo, navegador, ubicación aproximada, identificadores
                únicos y otras métricas recopiladas automáticamente a través de
                la plataforma Meta Ads.
              </li>
            </ul>
          }
        />

        <Section
          title="2. Uso de la Información"
          content={
            <ul className="list-disc list-inside text-gray-200 text-base">
              <li>
                Responder a tus consultas o solicitudes de información sobre
                nuestros servicios.
              </li>
              <li>Proporcionarte contenido relevante relacionado con nuestras soluciones.</li>
              <li>Mejorar nuestras estrategias de marketing y campañas publicitarias.</li>
              <li>
                Enviarte actualizaciones sobre promociones, novedades o servicios si has dado tu consentimiento explícito.
              </li>
            </ul>
          }
        />

        <Section
          title="3. Protección de la Información"
          content={
            <p className="text-gray-200 text-base">
              Adoptamos medidas de seguridad técnicas, administrativas y físicas
              para proteger tu información contra accesos no autorizados,
              alteraciones, divulgaciones o destrucciones. Meta Ads también
              cuenta con sus propias políticas de seguridad para garantizar la
              protección de los datos compartidos a través de su plataforma.
            </p>
          }
        />

        <Section
          title="4. Compartición de la Información"
          content={
            <ul className="list-disc list-inside text-gray-200 text-base">
              <li>
                <strong>Proveedores de servicios:</strong> que trabajan en
                nuestro nombre para procesar la información o mejorar nuestras
                campañas.
              </li>
              <li>
                <strong>Autoridades legales:</strong> si es requerido para
                cumplir con la ley.
              </li>
            </ul>
          }
        />

        <Section
          title="5. Tus Derechos"
          content={
            <ul className="list-disc list-inside text-gray-200 text-base">
              <li>Acceder, corregir o eliminar tus datos personales.</li>
              <li>Retirar tu consentimiento para el uso de tu información en cualquier momento.</li>
              <li>Solicitar información sobre cómo estamos utilizando tus datos.</li>
            </ul>
          }
        />

        <Section
          title="6. Uso de Cookies y Tecnologías Similares"
          content={
            <p className="text-gray-200 text-base">
              Nuestras campañas en Meta Ads pueden utilizar cookies u otras
              tecnologías para recopilar datos sobre tus interacciones con
              nuestros anuncios. Puedes administrar tus preferencias de cookies
              a través de las configuraciones de tu navegador o en la plataforma
              de Meta Ads.
            </p>
          }
        />

        <Section
          title="7. Cambios en esta Política"
          content={
            <p className="text-gray-200 text-base">
              Podemos actualizar esta política de privacidad periódicamente.
              Cualquier cambio será comunicado a través de nuestras campañas o
              en nuestra página web.
            </p>
          }
        />

        <Section
          title="8. Contacto"
          content={
            <div>
              <p className="text-gray-200 text-base mb-4">
                Si tienes preguntas o inquietudes sobre esta política de
                privacidad, contáctanos en:
              </p>
              <ul className="list-none text-gray-200">
                <li><strong>Correo electrónico:</strong></li>
                <li><strong>Teléfono:</strong> +54 9 11 7360-5805</li>
              </ul>
            </div>
          }
        />

        <p className="text-gray-200 text-base mt-6">
          En Revolution Academy, estamos comprometidos con proteger tu
          privacidad y brindarte una experiencia segura en nuestras campañas
          publicitarias.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const Section = ({ title, content }) => (
  <div className="mb-6">
    <h2 className="text-gray-200 text-2xl font-bold mb-2">{title}</h2>
    {content}
  </div>
);

export default PrivacyPolicy;
