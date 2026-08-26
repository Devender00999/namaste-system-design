export const translations = {
   en: {
      navbar: {
         home: "Home",
         about: "About",
      },
      about_us: "About Us",
      description: "Welcome to our meme page! Discover hilarious memes, trending jokes, and entertaining content updated regularly to keep you laughing and engaged.",
   },

   hi: {
      navbar: {
         home: "होम",
         about: "हमारे बारे में",
      },
      about_us: "हमारे बारे में",
      description:
         "हमारे मीम पेज में आपका स्वागत है! मज़ेदार मीम्स, ट्रेंडिंग चुटकुले और मनोरंजक सामग्री खोजें, जिन्हें आपको हंसाने और मनोरंजन करने के लिए नियमित रूप से अपडेट किया जाता है।",
   },

   ka: {
      navbar: {
         home: "ಮುಖಪುಟ",
         about: "ನಮ್ಮ ಬಗ್ಗೆ",
      },
      about_us: "ನಮ್ಮ ಬಗ್ಗೆ",
      description:
         "ನಮ್ಮ ಮೀಮ್ ಪುಟಕ್ಕೆ ಸ್ವಾಗತ! ನಿಮ್ಮನ್ನು ನಗಿಸಲು ಮತ್ತು ಮನರಂಜಿಸಲು ನಿಯಮಿತವಾಗಿ ನವೀಕರಿಸಲಾಗುವ ಹಾಸ್ಯಾಸ್ಪದ ಮೀಮ್‌ಗಳು, ಟ್ರೆಂಡಿಂಗ್ ಹಾಸ್ಯಗಳು ಮತ್ತು ಮನರಂಜನಾ ವಿಷಯಗಳನ್ನು ಇಲ್ಲಿ ಅನ್ವೇಷಿಸಿ.",
   },

   tm: {
      navbar: {
         home: "முகப்பு",
         about: "எங்களை பற்றி",
      },
      about_us: "எங்களை பற்றி",
      description:
         "எங்கள் மீம் பக்கத்திற்கு வரவேற்கிறோம்! உங்களை சிரிக்கவும் மகிழ்விக்கவும் தொடர்ந்து புதுப்பிக்கப்படும் நகைச்சுவையான மீம்கள், பிரபலமான ஜோக்கள் மற்றும் பொழுதுபோக்கு உள்ளடக்கங்களை கண்டறியுங்கள்.",
   },
} as const;

export type Translations = typeof translations;
export type Language = keyof Translations;
