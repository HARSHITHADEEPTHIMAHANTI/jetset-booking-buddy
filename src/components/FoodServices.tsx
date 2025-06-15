
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, ShoppingCart, UtensilsCrossed, Coffee, Package } from "lucide-react";

export const FoodServices = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<{
    mealOptions: string[];
    mealTypes: string[];
    beverages: string[];
    addOns: string[];
    packages: string[];
  }>({
    mealOptions: [],
    mealTypes: [],
    beverages: [],
    addOns: [],
    packages: []
  });

  const handleItemToggle = (category: keyof typeof selectedItems, item: string) => {
    setSelectedItems(prev => ({
      ...prev,
      [category]: prev[category].includes(item)
        ? prev[category].filter(i => i !== item)
        : [...prev[category], item]
    }));
  };

  const getTotalSelected = () => {
    return Object.values(selectedItems).flat().length;
  };

  const renderSelectionCategory = (
    title: string,
    items: string[],
    category: keyof typeof selectedItems,
    icon: React.ReactNode
  ) => (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        {icon}
        <h4 className="font-semibold text-lg">{title}</h4>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {items.map((item) => {
          const isSelected = selectedItems[category].includes(item);
          return (
            <Button
              key={item}
              variant={isSelected ? "default" : "outline"}
              size="sm"
              onClick={() => handleItemToggle(category, item)}
              className="justify-between h-auto p-3 text-left"
            >
              <span className="text-sm">{item}</span>
              {isSelected && <Check className="h-4 w-4" />}
            </Button>
          );
        })}
      </div>
    </div>
  );

  if (!selectedService) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Food Services</h3>
          <p className="text-muted-foreground">Choose your preferred dining experience</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
            onClick={() => setSelectedService('buy-on-board')}
          >
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle>Buy-on-Board</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Purchase fresh meals and snacks during your flight
              </p>
              <ul className="text-sm space-y-1 text-left">
                <li>• Wide variety of hot and cold meals</li>
                <li>• Fresh snacks and beverages</li>
                <li>• Pay with card or cash</li>
                <li>• Available on most flights</li>
              </ul>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
            onClick={() => setSelectedService('in-flight-dining')}
          >
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <UtensilsCrossed className="h-8 w-8 text-orange-600" />
              </div>
              <CardTitle>In-flight Dining</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Pre-order your meals for a premium dining experience
              </p>
              <ul className="text-sm space-y-1 text-left">
                <li>• Chef-curated meal options</li>
                <li>• Special dietary requirements</li>
                <li>• Premium meal packages</li>
                <li>• Guaranteed availability</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">
            {selectedService === 'buy-on-board' ? 'Buy-on-Board' : 'In-flight Dining'}
          </h3>
          <p className="text-muted-foreground">Customize your meal preferences</p>
        </div>
        <Button variant="outline" onClick={() => setSelectedService(null)}>
          ← Back to Options
        </Button>
      </div>

      <div className="grid gap-8">
        {/* Meal Packages */}
        {renderSelectionCategory(
          "Meal Packages",
          ["Economy meal package", "Premium meal package"],
          "packages",
          <Package className="h-5 w-5 text-purple-600" />
        )}

        <Separator />

        {/* Meal Options */}
        {renderSelectionCategory(
          "Food Preferences",
          ["Vegetarian", "Non-Vegetarian", "Vegan", "Gluten-Free", "Hindu Meal", "Kosher Meal", "Halal Meal"],
          "mealOptions",
          <UtensilsCrossed className="h-5 w-5 text-green-600" />
        )}

        <Separator />

        {/* Meal Types */}
        {renderSelectionCategory(
          "Meal Types",
          ["Breakfast", "Lunch", "Dinner", "Snacks"],
          "mealTypes",
          <UtensilsCrossed className="h-5 w-5 text-orange-600" />
        )}

        <Separator />

        {/* Beverages */}
        {renderSelectionCategory(
          "Beverages",
          ["Cola", "Soda", "Orange Juice", "Apple Juice", "Coffee", "Tea", "Water"],
          "beverages",
          <Coffee className="h-5 w-5 text-blue-600" />
        )}

        <Separator />

        {/* Add-ons */}
        {renderSelectionCategory(
          "Add-ons & Extras",
          ["Mixed Nuts", "Chocolates", "Extra Salt", "Extra Sugar", "Crackers", "Fresh Fruit"],
          "addOns",
          <Package className="h-5 w-5 text-red-600" />
        )}
      </div>

      {/* Summary and Checkout */}
      {getTotalSelected() > 0 && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">Your Selection</h4>
                <p className="text-sm text-muted-foreground">
                  {getTotalSelected()} items selected
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {Object.entries(selectedItems).map(([category, items]) =>
                    items.map((item) => (
                      <Badge key={`${category}-${item}`} variant="secondary">
                        {item}
                      </Badge>
                    ))
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedItems({
                    mealOptions: [],
                    mealTypes: [],
                    beverages: [],
                    addOns: [],
                    packages: []
                  })}
                >
                  Clear All
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Booking
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
