import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Smartphone, Shield, Info } from "lucide-react";

interface PaymentFormProps {
  eventPrice: number;
  eventName: string;
  onPayment: (method: string, amount: number) => void;
}

const PaymentForm = ({ eventPrice, eventName, onPayment }: PaymentFormProps) => {
  const [paymentMethod, setPaymentMethod] = useState("pix");
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  });

  // Taxa adicional para cartão (5%)
  const cardFee = 0.05;
  const pixPrice = eventPrice;
  const cardPrice = eventPrice * (1 + cardFee);

  const handlePayment = () => {
    onPayment(paymentMethod, paymentMethod === "pix" ? pixPrice : cardPrice);
  };

  return (
    <Card className="card-glow">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-primary" />
          <span>Pagamento Seguro</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Inscrição para: {eventName}
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Payment Method Selection */}
        <div>
          <Label className="text-base font-medium">Método de Pagamento</Label>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-3">
            {/* PIX Option */}
            <div className="flex items-center space-x-3 p-4 border border-border rounded-lg">
              <RadioGroupItem value="pix" id="pix" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-6 h-6 text-primary" />
                    <div>
                      <Label htmlFor="pix" className="font-medium">PIX</Label>
                      <p className="text-sm text-muted-foreground">Pagamento instantâneo</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">
                      R$ {pixPrice.toFixed(2)}
                    </div>
                    <Badge className="bg-green-500 text-xs">DESCONTO</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Credit Card Option */}
            <div className="flex items-center space-x-3 p-4 border border-border rounded-lg">
              <RadioGroupItem value="card" id="card" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-6 h-6 text-blue-500" />
                    <div>
                      <Label htmlFor="card" className="font-medium">Cartão de Crédito</Label>
                      <p className="text-sm text-muted-foreground">Parcelamento disponível</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">
                      R$ {cardPrice.toFixed(2)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      +{(cardFee * 100).toFixed(0)}% taxa
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        {/* Payment Form */}
        {paymentMethod === "pix" && (
          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-3">
              <Info className="w-4 h-4 text-primary" />
              <span className="font-medium text-sm">Como funciona o PIX:</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>1. Clique em "Pagar com PIX" abaixo</li>
              <li>2. Use seu app bancário para escanear o QR Code</li>
              <li>3. Confirme o pagamento no seu banco</li>
              <li>4. Sua inscrição será confirmada automaticamente</li>
            </ul>
          </div>
        )}

        {paymentMethod === "card" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="cardNumber">Número do Cartão</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={cardData.number}
                  onChange={(e) => setCardData({...cardData, number: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="cardName">Nome no Cartão</Label>
                <Input
                  id="cardName"
                  placeholder="NOME COMO NO CARTÃO"
                  value={cardData.name}
                  onChange={(e) => setCardData({...cardData, name: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Validade</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/AA"
                    value={cardData.expiry}
                    onChange={(e) => setCardData({...cardData, expiry: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={cardData.cvv}
                    onChange={(e) => setCardData({...cardData, cvv: e.target.value})}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <Separator />

        {/* Security Info */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Shield className="w-4 h-4" />
          <span>Pagamento seguro processado por Mercado Pago e ASAS</span>
        </div>

        {/* Payment Button */}
        <Button 
          className="w-full btn-primary"
          onClick={handlePayment}
          disabled={paymentMethod === "card" && (!cardData.number || !cardData.name || !cardData.expiry || !cardData.cvv)}
        >
          {paymentMethod === "pix" ? 
            `Pagar com PIX - R$ ${pixPrice.toFixed(2)}` : 
            `Pagar com Cartão - R$ ${cardPrice.toFixed(2)}`
          }
        </Button>
      </CardContent>
    </Card>
  );
};

export default PaymentForm;