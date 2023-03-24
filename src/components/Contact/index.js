function Contact() {
  return (
    <section className="d-flex justify-content-center">
      <form id="contact-form" className="">
        <div className="mb-3">
          <label For="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div className="mb-3">
          <label For="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        <div className="mb-3">
          <label For="message">Message:</label>
          <textarea name="message" rows="6" />
        </div>

        <button type="submit" className="mb-3">
          Submit
        </button>
      </form>
    </section>
  );
}
export default Contact;
