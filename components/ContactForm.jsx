import React, { useRef } from "react";

const ContactForm = () => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const consultationRef = useRef();
  const formInputStyle =
    "focus:outline-none focus:ring focus:ring-orange bg-gray-500 focus:bg-white p-2 rounded text-white focus:text-black";

  function formHandler(e) {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      consultation: consultationRef.current.value,
    };

  }

  return (
    <form
      onSubmit={formHandler}
      className="w-[80%] rounded p-5 mx-auto my-5 flex flex-col justify-center text-black gap-2 "
    >
      <div className="flex flex-col">
        <input
          className={formInputStyle}
          type="text"
          placeholder="Nombre"
          ref={nameRef}
        />
      </div>

      <div className="flex flex-col">
        <input
          type="number"
          placeholder="Teléfono"
          ref={phoneRef}
          className={formInputStyle}
        />
      </div>

      <div className="flex flex-col">
        <input
          type="email"
          placeholder="E-mail"
          ref={emailRef}
          className={formInputStyle}
        />
      </div>

      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Consulta"
          ref={consultationRef}
          className={formInputStyle}
        />
      </div>

      <button type="submit" className="p-2 rounded bg-orange mx-3 mt-3 hover:opacity-80">
        Enviar Consulta
      </button>
    </form>
  );
};

export default ContactForm;
