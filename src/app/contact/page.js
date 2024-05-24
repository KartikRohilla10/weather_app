import styles from "../globals.css";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div style={{ margin: "70px" }}>
        <h1>Contact Us</h1>
        <p>
          Thank you for your interest in Whats Weather ! If you have any
          questions, inquiries, or feedback, please feel free to reach out to us
          using the contact information provided below:
        </p>
        <p>
          <strong>Company Name:</strong> ABC Pvt. Ltd.
        </p>
        <p>
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
        <p>
          <strong>Email:</strong> info@Abc_Researchs.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p>
          Alternatively, you can fill out the contact form below, and one of our
          representatives will get back to you as soon as possible:
        </p>
        <form
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="2.5" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
