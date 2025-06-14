
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Airplane, Clock, MapPin } from "lucide-react";

interface FlightResultsProps {
  searchData: any;
  showAllFlights?: boolean;
}

export const FlightResults = ({ searchData, showAllFlights = false }: FlightResultsProps) => {
  const flights = [
    {
      airline: "IndiGo",
      flightNumber: "6E 435",
      departure: "11:00 AM",
      arrival: "01:30 PM", 
      duration: "2h 30m",
      price: "₹8,540",
      class: "Premium Economy",
      direct: true,
      preferred: true
    },
    {
      airline: "IndiGo", 
      flightNumber: "6E 627",
      departure: "02:15 PM",
      arrival: "04:45 PM",
      duration: "2h 30m", 
      price: "₹8,200",
      class: "Premium Economy",
      direct: true,
      preferred: true
    },
    {
      airline: "Vistara",
      flightNumber: "UK 579",
      departure: "11:30 AM", 
      arrival: "02:00 PM",
      duration: "2h 30m",
      price: "₹9,120",
      class: "Premium Economy", 
      direct: true,
      preferred: false
    },
    {
      airline: "Air India",
      flightNumber: "AI 503",
      departure: "03:45 PM",
      arrival: "06:15 PM", 
      duration: "2h 30m",
      price: "₹7,890",
      class: "Premium Economy",
      direct: true,
      preferred: false
    }
  ];

  const filteredFlights = showAllFlights ? flights : flights.filter(f => f.preferred);

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
        {filteredFlights.map((flight, index) => (
          <Card key={index} className={`hover:shadow-lg transition-shadow ${flight.preferred ? 'ring-2 ring-blue-200' : ''}`}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-lg">{flight.airline}</span>
                      {flight.preferred && (
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
                        <Airplane className="h-4 w-4 text-blue-600" />
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
        ))}
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
