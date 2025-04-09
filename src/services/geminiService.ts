import axios from 'axios';

interface GeminiResponse {
    candidates: Array<{
        content: {
            parts: Array<{
                text: string
            }>
        }
    }>
}

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

export const analyzeCropImage = async (imageBase64: string, language: string = 'en'): Promise<string> => {
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
        throw new Error('API key is missing. Please configure the VITE_GEMINI_API_KEY environment variable.');
    }

    try {
        const prompt = `Analyze this crop image and provide:
1. Health assessment (1-10 scale)
2. Identified diseases/threats
3. Recommended treatments
4. Prevention measures
5. Expected recovery timeline

Provide detailed, farmer-friendly advice in ${language}.`;

        const response = await axios.post<GeminiResponse>(
            `${GEMINI_API_URL}?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
            {
                contents: [{
                    parts: [
                        { text: prompt },
                        { 
                            inlineData: {
                                mimeType: 'image/jpeg',
                                data: imageBase64
                            }
                        }
                    ]
                }]
            },
            { timeout: 30000 } // 30 second timeout
        );

        if (!response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
            throw new Error('Invalid response format from API');
        }

        return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error analyzing image:', error);
        
        let errorMessage = 'Failed to analyze crop image';
        if (error.response) {
            if (error.response.status === 400) {
                errorMessage = 'Invalid request to analysis service';
            } else if (error.response.status === 401) {
                errorMessage = 'Invalid API key';
            } else if (error.response.status === 429) {
                errorMessage = 'Too many requests - please try again later';
            } else {
                errorMessage = `API Error: ${error.response.status}`;
            }
        } else if (error.code === 'ECONNABORTED') {
            errorMessage = 'Request timed out - please try again';
        } else if (error.message.includes('Network Error')) {
            errorMessage = 'Network error - please check your connection';
        }

        throw new Error(errorMessage);
    }
};

export const validateApiKey = async (): Promise<boolean> => {
    if (!import.meta.env.VITE_GEMINI_API_KEY) return false;
    
    try {
        await axios.get(
            `https://generativelanguage.googleapis.com/v1beta/models?key=${import.meta.env.VITE_GEMINI_API_KEY}`
        );
        return true;
    } catch {
        return false;
    }
};
