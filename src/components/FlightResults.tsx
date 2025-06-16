
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, Clock, MapPin } from "lucide-react";

interface FlightResultsProps {
  searchData: any;
  showAllFlights?: boolean;
}

export const FlightResults = ({ searchData, showAllFlights = false }: FlightResultsProps) => {
  // Comprehensive flight data for all airlines
  const allFlights = [
    // IndiGo flights
    {
      airline: "IndiGo",
      flightNumber: "6E 435",
      departure: "11:00 AM",
      arrival: "01:30 PM", 
      duration: "2h 30m",
      price: "₹8,540",
      class: "Premium Economy",
      direct: true
    },
    {
      airline: "IndiGo", 
      flightNumber: "6E 627",
      departure: "02:15 PM",
      arrival: "04:45 PM",
      duration: "2h 30m", 
      price: "₹8,200",
      class: "Premium Economy",
      direct: true
    },
    // SpiceJet flights
    {
      airline: "SpiceJet",
      flightNumber: "SG 123",
      departure: "09:30 AM",
      arrival: "12:00 PM",
      duration: "2h 30m",
      price: "₹7,650",
      class: "Premium Economy",
      direct: true
    },
    {
      airline: "SpiceJet",
      flightNumber: "SG 456",
      departure: "04:00 PM",
      arrival: "06:30 PM",
      duration: "2h 30m",
      price: "₹7,850",
      class: "Premium Economy",
      direct: true
    },
    // Air India flights
    {
      airline: "Air India",
      flightNumber: "AI 503",
      departure: "03:45 PM",
      arrival: "06:15 PM", 
      duration: "2h 30m",
      price: "₹7,890",
      class: "Premium Economy",
      direct: true
    },
    {
      airline: "Air India",
      flightNumber: "AI 789",
      departure: "10:15 AM",
      arrival: "12:45 PM",
      duration: "2h 30m",
      price: "₹8,100",
      class: "Premium Economy",
      direct: true
    },
    // Vistara flights
    {
      airline: "Vistara",
      flightNumber: "UK 579",
      departure: "11:30 AM", 
      arrival: "02:00 PM",
      duration: "2h 30m",
      price: "₹9,120",
      class: "Premium Economy", 
      direct: true
    },
    {
      airline: "Vistara",
      flightNumber: "UK 234",
      departure: "01:45 PM",
      arrival: "04:15 PM",
      duration: "2h 30m",
      price: "₹9,350",
      class: "Premium Economy",
      direct: true
    },
    // AirAsia flights
    {
      airline: "AirAsia",
      flightNumber: "I5 876",
      departure: "08:00 AM",
      arrival: "10:30 AM",
      duration: "2h 30m",
      price: "₹6,890",
      class: "Premium Economy",
      direct: true
    },
    {
      airline: "AirAsia",
      flightNumber: "I5 321",
      departure: "05:30 PM",
      arrival: "08:00 PM",
      duration: "2h 30m",
      price: "₹7,200",
      class: "Premium Economy",
      direct: true
    },
    // Emirates flights
    {
      airline: "Emirates",
      flightNumber: "EK 567",
      departure: "12:00 PM",
      arrival: "02:30 PM",
      duration: "2h 30m",
      price: "₹12,500",
      class: "Premium Economy",
      direct: true
    },
    {
      airline: "Emirates",
      flightNumber: "EK 890",
      departure: "06:00 PM",
      arrival: "08:30 PM",
      duration: "2h 30m",
      price: "₹12,800",
      class: "Premium Economy",
      direct: true
    }
  ];

  // Filter flights based on user preferences
  const getFilteredFlights = () => {
    if (showAllFlights) {
      return allFlights;
    }

    // First, get flights from the preferred airline
    const preferredFlights = allFlights.filter(flight => 
      flight.airline === searchData.airline
    );

    // If preferred airline has flights, show them first, then add a few from other airlines
    if (preferredFlights.length > 0) {
      const otherFlights = allFlights
        .filter(flight => flight.airline !== searchData.airline)
        .slice(0, 2); // Show 2 flights from other airlines
      
      return [...preferredFlights, ...otherFlights];
    }

    // If no preferred airline flights, show all
    return allFlights.slice(0, 6);
  };

  const filteredFlights = getFilteredFlights();

  return (
    <div className="pt-20 max-w-6xl mx-auto p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Flight Results</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex flex-wrap gap-4 text-sm">
            <span><strong>Route:</strong> {searchData.from} → {searchData.to}</span>
            <span><strong>Date:</strong> {searchData.departureDate.toDateString()}</span>
            <span><strong>Passengers:</strong> {searchData.passengers}</span>
            <span><strong>Class:</strong> {searchData.class}</span>
            <span><strong>Preference:</strong> {searchData.airline}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredFlights.map((flight, index) => {
          const isPreferred = flight.airline === searchData.airline;
          return (
            <Card key={index} className={`hover:shadow-lg transition-shadow ${isPreferred ? 'ring-2 ring-blue-200' : ''}`}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-lg">{flight.airline}</span>
                        {isPreferred && (
                          <Badge className="bg-blue-100 text-blue-800">Preferred Airline</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{flight.flightNumber}</p>
                    </div>

                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <p className="text-2xl font-bold">{flight.departure}</p>
                        <p className="text-sm text-gray-600">{searchData.from.split(' ')[0]}</p>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                          <div className="w-16 h-0.5 bg-blue-600"></div>
                          <Plane className="h-4 w-4 text-blue-600" />
                          <div className="w-16 h-0.5 bg-blue-600"></div>
                          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{flight.duration}</p>
                        {flight.direct && (
                          <Badge variant="secondary" className="mt-1 text-xs">Direct</Badge>
                        )}
                      </div>

                      <div className="text-center">
                        <p className="text-2xl font-bold">{flight.arrival}</p>
                        <p className="text-sm text-gray-600">{searchData.to.split(' ')[0]}</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center md:text-right">
                    <p className="text-3xl font-bold text-blue-600 mb-1">{flight.price}</p>
                    <p className="text-sm text-gray-600 mb-3">{flight.class}</p>
                    <Button className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto">
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {!showAllFlights && (
        <div className="text-center mt-8">
          <Button variant="outline" className="mr-4">
            View All Airlines
          </Button>
          <Button>
            Modify Search
          </Button>
        </div>
      )}
    </div>
  );
};
