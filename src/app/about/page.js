import styles from "../globals.css";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div style={{ margin: "70px" }}>
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are a team of passionate individuals
          dedicated to providing you with the best weather information
          available.
        </p>
        <p>
          Our mission is to make weather forecasting more accessible and
          understandable for everyone. We strive to deliver accurate and
          up-to-date weather data, empowering you to make informed decisions
          about your day-to-day activities.
        </p>
        <h2>Our Story</h2>
        <p>
          Our journey began with a simple idea: to create a weather app that is
          both user-friendly and reliable. Over time, we have expanded our
          services to include a wide range of features, from hourly forecasts to
          interactive maps.
        </p>
        <p>
          With years of experience in meteorology and software development, our
          team works tirelessly to improve our products and provide you with the
          best possible experience.
        </p>
        <h2>Meet the Team</h2>
        <p>
          Get to know the faces behind our weather app! We are a diverse group
          of individuals with backgrounds in meteorology, engineering, design,
          and more. Despite our differences, we share a common goal: to help you
          stay ahead of the weather.
        </p>
        <p>
          Whether you're planning a weekend getaway or just checking the daily
          forecast, we're here to help. Thank you for choosing us as your go-to
          source for weather information!
        </p>
      </div>
    </>
  );
}
