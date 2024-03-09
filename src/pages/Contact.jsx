import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Fox from "../models/Fox";
import Alert from "../components/Alert";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import { socialLinks } from "../constants";
import { Link } from "react-router-dom";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimations, setCurrentAnimations] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimations("walk");
  const handleBlur = () => setCurrentAnimations("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimations("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ridzwan Gunawan",
          from_email: form.email,
          to_email: "ridzwangunawan10@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimations("idle");
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((err) => {
        setIsLoading(false);
        setCurrentAnimations("idle");
        console.log(err);
        showAlert({
          show: true,
          text: "I didnt receive your message",
          type: "danger",
        });
      });
  };

  return (
    <>
      <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
        {alert.show && <Alert {...alert} />}

        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">Get in Touch</h1>
          <form
            className="w-full flex flex-col gap-7 mt-14"
            onSubmit={handleSubmit}
          >
            <label className="text-black-500 font font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="jhon"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="jhon@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Your Message
              <textarea
                name="message"
                rows="4"
                className="textarea"
                placeholder="Write your thoughts here..."
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="btn"
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimations}
                position={[0.5, 0, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
      <hr className="border-slate-200 mt-10" />

      <footer className="text-center py-4 font-semibold flex items-center flex-row justify-center ml-4 font-poppins text-xl">
        &copy; 2024 Ridzwan Gunawan.
        <div className="flex gap-2 ml-2">
          {socialLinks.map((social) => (
            <div className="btn-front rounded-xl">
              <Link
                to={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600"
              >
                <img
                  src={social.iconUrl}
                  alt="threads"
                  className="w-7 h-7 object-contain"
                />
              </Link>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Contact;
