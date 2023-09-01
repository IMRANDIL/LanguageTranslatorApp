import axios from 'axios';

const translateText = async (text: string, targetLanguage: string) => {
  const apiKey = 'YOUR_TRANSLATION_API_KEY';
  const apiUrl = 'https://translation.googleapis.com/language/translate/v2';

  try {
    const response = await axios.post(apiUrl, {
      q: text,
      target: targetLanguage,
      key: apiKey,
    });

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return 'Translation error';
  }
};

export {translateText};
