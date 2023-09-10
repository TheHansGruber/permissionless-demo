import { useEffect, useState } from 'react';
import { useMyNftTokenUri } from "../generated";

export function NftImage() {

    const [jsonData, setJsonData] = useState(null);

    const tokenId = 0n;

    const { data: tokenUri, error } = useMyNftTokenUri({
        args: [tokenId],
    });

    useEffect(() => {
        if (error) {
          console.error('Error fetching token URI:', error);
        }
      }, [error]);

    useEffect(() => {
    const [, base64Content] = tokenUri.split(',');

    try {
        const decodedData = atob(base64Content);
        const parsedData = JSON.parse(decodedData);

        // Set the parsed JSON data in the state
        setJsonData(parsedData);
    } catch (error) {
        console.error('Error decoding and parsing JSON:', error);
    }
    }, [tokenUri]);

      return (
        <div>
              {jsonData ? (
                <img width="500" height="500" src={jsonData.image} alt="SVG" />
              ) : (
                <p>Image not found</p>
              )}
        </div>
      );
}

export default NftImage;