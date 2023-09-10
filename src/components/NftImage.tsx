import React, { useEffect, useState } from 'react';
import { useAccount } from "wagmi";
import { useMyNftTokenUri } from "../generated";

export function NftImage() {

    const [jsonData, setJsonData] = useState(null);

    const { address } = useAccount();

    const tokenId = 0n; // Replace with the desired token ID
    // Call the useMyNftTokenUri hook to fetch the token URI
    const { data: tokenUri, error } = useMyNftTokenUri({
        args: [tokenId],
    });

    useEffect(() => {
        // Check for errors
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