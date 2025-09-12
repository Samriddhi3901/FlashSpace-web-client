import { API } from "@/api";
import axios from "axios";
import { Contact, ContactFormData } from "@/types/contact";

/**
 * Create a new contact
 * @param contact - Contact data to create
 * @returns Created contact data
 */
export const createContact = async (contact: ContactFormData) => {
  try {
    const response = await axios.post(
      ${API.domain}${API.endPoints.createContact},
      contact
    );

    if (response.status === 200 && response.data.success) {
      return response.data.data as Contact;
    }

    if (response.data && !response.data.success) {
      throw new Error(response.data.message || "Failed to create contact");
    }

    throw new Error("Failed to create contact");
  } catch (error: any) {
    console.error("Error creating contact:", error);
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else if (error.message) {
      throw new Error(error.message);
    } else {
      throw new Error("Failed to create contact");
    }
  }
};