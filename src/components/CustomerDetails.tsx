import { useEffect, useState } from "react";

type Props = {
  customerId: number;
  customerName: string;
  customerAddress: string;
  customerDetails: string;
};

const PHOTOS_COUNT = 9;

const CustomerDetails = ({
  customerId,
  customerName,
  customerAddress,
  customerDetails,
}: Props) => {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = () => {
      const data = Array.from({ length: PHOTOS_COUNT }, () => {
        return `https://picsum.photos/208/208?random=${Math.ceil(
          Math.random() * 1000
        )}`;
      });

      setImgUrls(data);
    };

    fetchImages();

    const interval = setInterval(fetchImages, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [customerId]);

  return (
    <div className="w-full p-12 pt-8 items-center flex flex-col">
      <div className="flex flex-col justify-center items-center gap-2 max-w-screen-lg">
        <h2 className="text-2xl font-medium">{customerName}</h2>
        <p className="text-gray-700">{customerAddress}</p>
        <p className="text-sm text-gray-500 text-center">{customerDetails}</p>
      </div>

      <div className="grid grid-cols-3 gap-12 mt-8 max-w-screen-md">
        {imgUrls.map((url, index) => (
          <img
            src={url}
            key={index}
            loading="lazy"
            className="rounded-lg aspect-square"
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
