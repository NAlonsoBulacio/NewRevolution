import React from "react";
import result from "../../assets/imagenes/result.webp";
import result2 from "../../assets/imagenes/result2.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonio from "../../assets/testimonios-david/testimonio.jpg"
import testimonio2 from "../../assets/testimonios-david/testimonio2.jpg"
import testimonio3 from "../../assets/testimonios-david/testimonio3.jpg"
import testimonio4 from "../../assets/testimonios-david/testimonio4.jpg"
import testimonio5 from "../../assets/testimonios-david/testimoinio5.jpg"
import testimonio6 from "../../assets/testimonios-david/testimoinio6.jpg"
import testimonio7 from "../../assets/testimonios-david/testimoinio7.jpg"
import testimonio8 from "../../assets/testimonios-david/testimonio8.jpg"
const MissionAndResult = ({ david }) => {
  const testimonios = [
    testimonio8, testimonio7, testimonio6, testimonio5, testimonio4, testimonio3, testimonio2, testimonio
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // Para pantallas medianas y grandes
        settings: {
          slidesToShow: 2, // Mostrar dos slides
        },
      },
      {
        breakpoint: 600, // Para pantallas pequeñas
        settings: {
          slidesToShow: 1, // Mostrar un slide
        },
      },
      {
        breakpoint: 450, // Para pantallas pequeñas
        settings: {
          slidesToShow: 1, // Mostrar un slide
        },
      },
    ],
  };

  return (
    <div className="text-gray-100 py-10 px-0 poppins-regular">
      {/* <Slider {...settings}>
        {testimonios.map((testimonial, index) => (
          <div key={index} className="p-6">
            <div className="h-full bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center justify-center">
              <div className="mb-4 text-green-500 text-4xl font-bold">“</div>
              <p className="text-gray-600 text-lg italic mb-6">
                {testimonial.testimonial}
              </p>
              <div className="flex items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-[#111827] font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider> */}
      {david ? (
        ""
      ) : (
       ""
      )}
      {testimonios ? (
        <div className="">
          <h1 className="text-4xl text-center font-bold mb-6 poppins-bold">
            Testimonios:
          </h1>
          <p className="mb-6 text-center">
            Para que veas que no somos solo palabras, queremos mostrarte algunos
            de los resultados que nuestros alumnos han tenido gracias a
            Revolution en donde te mostramos cómo montar tu propio negocio
            online con este nuevo método.
          </p>

          <div className="flex flex-wrap">
            {testimonios?.map((testimonio) => {
              <div className="w-[30%]" key={testimonio}>
                <img src={testimonio} alt="testimonio" />
              </div>;
            })}
          </div>
          <div className="flex flex-wrap gap-x-4 justify-center px-2">
            <div className="flex justify-center mb-6 w-full lg:w-[30%]">
              <img
                src={testimonios[0]}
                alt="Resultados"
                className="w-full max-w-md"
              />
            </div>

            <div className="flex justify-center mb-6 w-full lg:w-[30%]">
              <img
                src={testimonios[1]}
                alt="Resultados"
                className="w-full max-w-md"
              />
            </div>
            <div className="flex justify-center mb-6 w-full lg:w-[30%]">
              <img
                src={testimonios[2]}
                alt="Resultados"
                className=" w-full max-w-md"
              />
            </div>
            <div className="flex justify-center mb-6 w-full lg:w-[30%]">
              <img
                src={testimonios[3]}
                alt="Resultados"
                className=" w-full max-w-md"
              />
            </div>
            <div className="flex justify-center mb-6 w-full lg:w-[30%]">
              <img
                src={testimonios[4]}
                alt="Resultados"
                className=" w-full max-w-md"
              />
            </div>
            <div className="flex justify-center mb-6 w-full lg:w-[30%]">
              <img
                src={testimonios[5]}
                alt="Resultados"
                className=" w-full max-w-md"
              />
            </div>
            <div className="flex justify-center mb-6 w-full lg:w-[30%]">
              <img
                src={testimonios[6]}
                alt="Resultados"
                className=" w-full max-w-md"
              />
            </div>
            <div className="flex justify-center mb-6 w-full lg:w-[30%]">
              <img
                src={testimonios[7]}
                alt="Resultados"
                className=" w-full max-w-md"
              />
            </div>
          </div>

          <p className="mb-6">
            Estos son sólo algunos ejemplos del tipo de éxito que es posible
            alcanzar con el Método Revolution.
          </p>
          <p className="mb-6">
            Y lo mejor es que estas historias no son raras. De hecho, hay nuevas
            historias de éxito todos los días.
          </p>
          <p className="mb-6">
            Y hoy, estoy acá para darte las herramientas que necesitas para
            crear tu propia historia de éxito.
          </p>
        </div>
      ) : (
        <div className="">
          <h1 className="text-4xl text-center font-bold mb-6 poppins-bold">
            Testimonios:
          </h1>
          <p className="mb-6 text-center">
            Para que veas que no somos solo palabras, queremos mostrarte algunos
            de los resultados que nuestros alumnos han tenido gracias a
            Revolution en donde te mostramos cómo montar tu propio negocio
            online con este nuevo método.
          </p>

          <div className="flex justify-center mb-6">
            <img
              src={result}
              alt="Resultados"
              className="w-2/3 lg:w-full max-w-md"
            />
          </div>

          <div className="flex justify-center mb-6">
            <img
              src={result2}
              alt="Resultados"
              className="w-2/3 lg:w-full max-w-md"
            />
          </div>
          <p className="mb-6">
            Estos son sólo algunos ejemplos del tipo de éxito que es posible
            alcanzar con el Método Revolution.
          </p>
          <p className="mb-6">
            Y lo mejor es que estas historias no son raras. De hecho, hay nuevas
            historias de éxito todos los días.
          </p>
          <p className="mb-6">
            Y hoy, estoy acá para darte las herramientas que necesitas para
            crear tu propia historia de éxito.
          </p>
        </div>
      )}
    </div>
  );
};

export default MissionAndResult;
