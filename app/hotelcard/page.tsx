import React from "react";
import Image from "next/image";

const hotels = [
    {
        name: "Grand Palace Hotel",
        location: "Dubai",
        image:
            "/dubai.jpg",
        price: "PKR 13500/night",
    },
    {
        name: "Sea View Resort",
        location: "New York",
        image:
            "/new-york.jpg",
        price: "PKR 15000/night",
    },
    {
        name: "Mountain Retreat",
        location: "Sakardu,Pakistan",
        image:
            "/sakardu.jpg",
        price: "PKR 12000/night",
    },
    {
        name: "City Lights Hotel",
        location: "Paris",
        image:
            "/paris.jpg",
        price: "PKR 11000/night",
    },
];

const HotelCardSection: React.FC = () => (
    <div className="max-w-6xl mx-auto px-4 py-10 min-h-screen mt-2">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Hotels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hotels.map((hotel, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded shadow overflow-hidden flex flex-col"
                >
                   <Image
                        src={hotel.image}
                        alt={hotel.name}
                        width={400}
                        height={192}
                        className="h-48 w-full object-cover"
                        style={{ width: "100%", height: "12rem", objectFit: "cover" }}
                        unoptimized 
                    />
                    <div className="p-4 flex-1 flex flex-col">
                        <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                        <p className="text-gray-500 mb-2">{hotel.location}</p>
                        <p className="text-lg font-bold mb-4">{hotel.price}</p>
                        <button className="mt-auto bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                            Book Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default HotelCardSection;