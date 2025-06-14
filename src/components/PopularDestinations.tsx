
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const PopularDestinations = () => {
  const destinations = [
    {
      region: "ASIA",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$2532",
      gradient: "from-blue-600 to-teal-500"
    },
    {
      region: "EUROPE", 
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$2532",
      gradient: "from-orange-500 to-red-500"
    },
    {
      region: "AFRICA",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$2532", 
      gradient: "from-amber-600 to-orange-600"
    },
    {
      region: "ANTARCTICA",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$2532",
      gradient: "from-slate-600 to-blue-700"
    }
  ];

  const airlines = [
    { name: "IndiGo", logo: "🟦", color: "bg-blue-100 text-blue-800" },
    { name: "SpiceJet", logo: "🔴", color: "bg-red-100 text-red-800" },
    { name: "Air India", logo: "🟠", color: "bg-orange-100 text-orange-800" },
    { name: "AirAsia", logo: "🔴", color: "bg-red-100 text-red-800" },
    { name: "Emirates", logo: "🟡", color: "bg-yellow-100 text-yellow-800" },
    { name: "Vistara", logo: "🟣", color: "bg-purple-100 text-purple-800" },
    { name: "Akasa Air", logo: "🟢", color: "bg-green-100 text-green-800" }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Explore the World Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Explore <span className="text-blue-600">the world</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover breathtaking destinations and unforgettable experiences across
            the globe. Your next journey awaits with endless possibilities.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
            Booking Now →
          </Button>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {destinations.map((dest, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${dest.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${dest.gradient} opacity-60 group-hover:opacity-70 transition-opacity`} />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{dest.region}</h3>
                  <p className="text-sm opacity-90">STARTING FROM</p>
                  <p className="text-xl font-bold">{dest.price}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Popular Airlines */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">Popular Airlines</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {airlines.map((airline, index) => (
              <div key={index} className={`px-4 py-2 rounded-full ${airline.color} font-medium`}>
                <span className="mr-2">{airline.logo}</span>
                {airline.name}
                {airline.name === "IndiGo" && (
                  <span className="ml-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                    Preferred
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
