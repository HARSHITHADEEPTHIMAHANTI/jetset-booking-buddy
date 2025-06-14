
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, CalendarIcon, Search, Home, Airplane, Users, CreditCard, Phone, MapPin } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { FlightResults } from "@/components/FlightResults";
import { PopularDestinations } from "@/components/PopularDestinations";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [searchData, setSearchData] = useState({
    from: "Bangalore (BLR)",
    to: "Vizag (VTZ)",
    departureDate: new Date(2025, 5, 15),
    returnDate: new Date(2025, 5, 25),
    passengers: "4 (2 Adults, 2 Children)",
    class: "Premium Economy",
    airline: "IndiGo",
    departureTime: "11:00 AM",
    flightType: "Direct Flights Only"
  });

  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
    setActiveSection("search");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "search":
        return <FlightResults searchData={searchData} />;
      case "flights":
        return <FlightResults searchData={searchData} showAllFlights={true} />;
      case "bookings":
        return (
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6">Your Bookings</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Please sign in to view your bookings.</p>
                <Button className="mt-4">Sign In</Button>
              </CardContent>
            </Card>
          </div>
        );
      case "services":
        return (
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Premium Economy Perks</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Extra legroom and wider seats</li>
                    <li>• Priority boarding</li>
                    <li>• Enhanced meal service</li>
                    <li>• Increased baggage allowance</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Direct Flight Benefits</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• No layovers or connections</li>
                    <li>• Faster travel time</li>
                    <li>• Reduced risk of delays</li>
                    <li>• Less hassle with baggage</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case "payments":
        return (
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6">Payment Methods</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["PhonePe", "Google Pay", "Net Banking", "Visa", "Paytm"].map((method) => (
                <Card key={method} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <CreditCard className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <p className="font-medium">{method}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span>24/7 Support: +1-800-FLIGHTS</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span>Head Office: Aviation Hub, Delhi</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Send Message</h3>
                  <div className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Email Address" />
                    <Input placeholder="Subject" />
                    <Button className="w-full">Send Message</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      default:
        return (
          <>
            {/* Hero Section */}
            <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-orange-400 overflow-hidden">
              <div className="absolute inset-0 bg-black/30"></div>
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{
                  backgroundImage: `url('/lovable-uploads/fc51d60a-163b-4ed0-b07e-17b00745841e.png')`
                }}
              ></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
                <div className="mb-8">
                  <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
                    Sky is the limit
                  </h1>
                  <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                    Discover breathtaking destinations and unforgettable experiences across the globe. Your next journey awaits with endless possibilities.
                  </p>
                </div>

                {/* Search Form */}
                <Card className="w-full max-w-4xl bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                        <Select value={searchData.from} onValueChange={(value) => setSearchData({...searchData, from: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Bangalore (BLR)">Bangalore (BLR)</SelectItem>
                            <SelectItem value="Delhi (DEL)">Delhi (DEL)</SelectItem>
                            <SelectItem value="Mumbai (BOM)">Mumbai (BOM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                        <Select value={searchData.to} onValueChange={(value) => setSearchData({...searchData, to: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Vizag (VTZ)">Vizag (VTZ)</SelectItem>
                            <SelectItem value="Chennai (MAA)">Chennai (MAA)</SelectItem>
                            <SelectItem value="Hyderabad (HYD)">Hyderabad (HYD)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className={cn("w-full justify-start text-left font-normal")}>
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {format(searchData.departureDate, "PPP")}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <CalendarComponent
                              mode="single"
                              selected={searchData.departureDate}
                              onSelect={(date) => date && setSearchData({...searchData, departureDate: date})}
                              className="p-3 pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                        <Select value={searchData.passengers} onValueChange={(value) => setSearchData({...searchData, passengers: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1 Adult">1 Adult</SelectItem>
                            <SelectItem value="2 Adults">2 Adults</SelectItem>
                            <SelectItem value="4 (2 Adults, 2 Children)">4 (2 Adults, 2 Children)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                        <Select value={searchData.class} onValueChange={(value) => setSearchData({...searchData, class: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Economy">Economy</SelectItem>
                            <SelectItem value="Premium Economy">Premium Economy</SelectItem>
                            <SelectItem value="Business">Business</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Airline</label>
                        <Select value={searchData.airline} onValueChange={(value) => setSearchData({...searchData, airline: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="IndiGo">IndiGo (Preferred)</SelectItem>
                            <SelectItem value="SpiceJet">SpiceJet</SelectItem>
                            <SelectItem value="Air India">Air India</SelectItem>
                            <SelectItem value="AirAsia">AirAsia</SelectItem>
                            <SelectItem value="Emirates">Emirates</SelectItem>
                            <SelectItem value="Vistara">Vistara</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Flight Type</label>
                        <Select value={searchData.flightType} onValueChange={(value) => setSearchData({...searchData, flightType: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Direct Flights Only">Direct Flights Only</SelectItem>
                            <SelectItem value="All Flights">All Flights</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button onClick={handleSearch} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                      <Search className="mr-2 h-5 w-5" />
                      Search Flights
                    </Button>
                  </CardContent>
                </Card>

                <Button className="mt-8 bg-blue-600/80 hover:bg-blue-700 backdrop-blur-sm">
                  Booking Now →
                </Button>
              </div>
            </div>

            {/* Popular Destinations */}
            <PopularDestinations />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderContent()}
    </div>
  );
};

export default Index;
