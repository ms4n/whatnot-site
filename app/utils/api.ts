import axios from "axios";

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/api";

export async function sendOTP(phoneNumber: string) {
  try {
    const response = await axios.post(`${apiBaseUrl}/otp/generate-otp`, {
      phoneNumber,
    });
    return response.data;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
}

export async function verifyOTP(phoneNumber: string, userOTP: string) {
  try {
    const response = await axios.post(`${apiBaseUrl}/otp/validate-otp`, {
      phoneNumber,
      userOTP,
    });
    return response.data;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
}
