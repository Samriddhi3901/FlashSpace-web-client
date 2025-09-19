export const API = {
  domain: process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:4000",

  endPoints: {
    //ContactForm 
    createForm: "/api/contactForm/createContactForm",
    getAllContactForm: "/api/contactForm/getAllContactForm",
    getContactFormById: "/api/contactForm/getContactFormById/",
    updateContactForm: "/api/contactForm/updateContactForm/",
    deleteContactForm: "/api/contactForm/deleteContactForm/",
    //SpaceProvider
    createSpaceProvider: "/api/spaceProvider/createSpaceProvider",
    getAllSpaceProviders: "/api/spaceProvider/getAllSpaceProviders",
    getSpaceProviderById: "/api/spaceProvider/getSpaceProviderById/",
    updateSpaceProvider: "/api/spaceProvider/updateSpaceProvider/",
    deleteSpaceProvider: "/api/spaceProvider/deleteSpaceProvider/"

  }
}