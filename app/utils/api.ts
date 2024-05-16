import axios from "axios";

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

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
    console.error("Error verifying OTP:", error);
    throw error;
  }
}

export async function handleOauth(phoneNumberString: string) {
  try {
    const response = await axios.get(`${apiBaseUrl}/auth/google/auth-url`, {
      headers: {
        phonenumber: phoneNumberString,
      },
      withCredentials: true,
    });
    return response.data.authUrl;
  } catch (error) {
    console.error("Error handling OAuth:", error);
    throw error;
  }
}
