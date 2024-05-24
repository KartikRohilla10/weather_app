import styles from "../globals.css";
import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <>
      <Navbar />
      <div style={{ margin: "70px" }}>
        <h1>Services Offered</h1>
        <p>
          We specialize in providing a wide range of weather-related services to
          cater to various needs and industries. Our offerings include:
        </p>
        <p>
          <strong>Weather Forecasting:</strong> We offer accurate and reliable
          weather forecasts tailored for events, strategic planning, and
          everyday use.
        </p>
        <p>
          <strong>Climate Analysis:</strong> Gain insights into historical
          climate trends and patterns to make informed decisions regarding
          environmental planning and resource management.
        </p>
        <p>
          <strong>Weather Data APIs:</strong> Access real-time and historical
          weather data through our powerful and user-friendly APIs for seamless
          integration into your applications.
        </p>
        <p>
          <strong>Custom Weather Solutions:</strong> We provide customized
          weather solutions designed to meet the specific requirements of
          various industries, ensuring optimal performance and accuracy.
        </p>
        <p>
          <strong>Consulting Services:</strong> Our team of experts offers
          consulting services to help businesses and organizations navigate
          weather-related risks and compliance issues.
        </p>
      </div>
    </>
  );
}
