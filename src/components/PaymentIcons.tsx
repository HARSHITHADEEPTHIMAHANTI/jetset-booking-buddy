
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Smartphone, Building, Banknote } from "lucide-react";

const PaymentIcons = () => {
  const paymentMethods = [
    {
      name: "PhonePe",
      icon: (
        <div className="h-8 w-8 mx-auto mb-2 bg-purple-600 rounded-lg flex items-center justify-center">
          <Smartphone className="h-5 w-5 text-white" />
        </div>
      ),
      color: "purple"
    },
    {
      name: "Google Pay",
      icon: (
        <div className="h-8 w-8 mx-auto mb-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">G</span>
        </div>
      ),
      color: "blue"
    },
    {
      name: "Net Banking",
      icon: (
        <div className="h-8 w-8 mx-auto mb-2 bg-green-600 rounded-lg flex items-center justify-center">
          <Building className="h-5 w-5 text-white" />
        </div>
      ),
      color: "green"
    },
    {
      name: "Visa",
      icon: (
        <div className="h-8 w-8 mx-auto mb-2 bg-blue-700 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">V</span>
        </div>
      ),
      color: "blue"
    },
    {
      name: "Paytm",
      icon: (
        <div className="h-8 w-8 mx-auto mb-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
          <Banknote className="h-5 w-5 text-white" />
        </div>
      ),
      color: "cyan"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {paymentMethods.map((method) => (
        <Card key={method.name} className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-4 text-center">
            {method.icon}
            <p className="font-medium text-sm">{method.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PaymentIcons;
