// import { useState, ChangeEvent, createRef } from "react";
import { useState, ChangeEvent, FormEvent, createRef } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  brand: string;
  service: string;
  projectInfo: string;
}

function ContactForm() {
  const form = createRef<HTMLFormElement>();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    brand: "",
    service: "",
    projectInfo: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleTextAreaChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function sendEmail(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE_ID!,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID!,
        e.currentTarget,
        import.meta.env.VITE_REACT_APP_PUBLIC_KEY!
      )
      .then(
        () => {
          setIsSubmitting(false);

          setFormData({
            name: "",
            email: "",
            brand: "",
            service: "",
            projectInfo: "",
          });
        },
        () => {
          setIsSubmitting(false);
        }
      );
  }

  return (
    <div className="flex flex-col w-full">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="text-black flex flex-col text-xs"
      >
        <label className="input input-bordered bg-white rounded-none border-black flex items-center gap-2 my-2">
          Name
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="bg-white grow text-darkgrey px-2"
          />
        </label>
        <label className="input input-bordered bg-white rounded-none border-black flex items-center gap-2 my-2">
          E-mail
          <input
            required
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-white grow text-darkgrey px-2"
          />
        </label>
        <label className="input input-bordered bg-white h-16 sm:h-12 rounded-none border-black flex items-center gap-2 my-2">
          Brand you represent
          <input
            required
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleInputChange}
            className="w-2/3 md:w-auto grow text-darkgrey px-2"
          />
        </label>
        <label className="input input-bordered bg-white h-16 sm:h-12 rounded-none border-black flex items-center gap-2 my-2">
          Service you're interested in
          <input
            required
            type="text"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-2/3 md:w-auto bg-white grow text-darkgrey px-2"
          />
        </label>
        <label className="textarea textarea-bordered bg-white rounded-none border-black flex items-start gap-2 my-2 textarea-md text-base">
          Project info
          <textarea
            required
            name="projectInfo"
            value={formData.projectInfo}
            onChange={handleTextAreaChange}
            className="bg-white textarea rounded-none h-28 px-2 py-0 grow text-darkgrey text-base"
          />
        </label>
        <div className="flex justify-center my-2">
          {isSubmitting ? (
            <button className="translate-y-1.5 bg-neutral-200 text-black text-base w-48 h-14 rounded-full shadow-btn-click tracking-widest">
              SENDING
            </button>
          ) : (
            <button
              type="submit"
              className="bg-white border-1 border-black text-black hover:bg-neutral-200 hover:border-0 text-base w-48 h-14 rounded-full shadow-btn tracking-widest"
            >
              SEND
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
