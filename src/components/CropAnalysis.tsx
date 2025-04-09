import { useState } from 'react';
import { analyzeCropImage } from '../services/geminiService';

export const CropAnalysis = () => {
  const [image, setImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setImage(event.target.result.toString());
      }
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = async () => {
    if (!image) return;

    try {
      setLoading(true);
      setError(null);
      const base64Data = image.split(',')[1];
      const result = await analyzeCropImage(base64Data);
      setAnalysis(result);
    } catch (err) {
      setError('Failed to analyze image. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Crop Health Analysis</h2>
      
      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Upload Crop Image:
          <input 
            type="file" 
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </label>
      </div>

      {image && (
        <div className="mb-4">
          <img 
            src={image} 
            alt="Uploaded crop" 
            className="max-w-full h-auto max-h-64 rounded"
          />
          <button
            onClick={analyzeImage}
            disabled={loading}
            className="mt-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 disabled:bg-gray-400"
          >
            {loading ? 'Analyzing...' : 'Analyze Crop Health'}
          </button>
        </div>
      )}

      {error && (
        <div className="text-red-500 mb-4">{error}</div>
      )}

      {analysis && (
        <div className="mt-4 p-4 bg-gray-50 rounded">
          <h3 className="font-bold mb-2">Analysis Results:</h3>
          <div className="whitespace-pre-line">{analysis}</div>
        </div>
      )}
    </div>
  );
};
