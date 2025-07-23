import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, User, Phone, Mail, MapPin, Users, Shield, Accessibility } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import PaymentForm from "@/components/PaymentForm";

const EventRegistration = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cpf: "",
    birthDate: "",
    gender: "",
    address: {
      street: "",
      number: "",
      city: "",
      state: "",
      zipCode: ""
    },
    emergencyContact: {
      name: "",
      phone: "",
      relationship: ""
    },
    modality: "", // nova propriedade para modalidade
    category: "",
    shirtSize: "",
    kitItems: {
      shirt: true,
      medal: true,
      bag: false,
      cap: false,
      bottle: false
    },
    medicalConditions: "",
    agreeTerms: false,
    agreeRules: false
  });

  const [step, setStep] = useState(1);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const event = {
    id: Number(id),
    name: "Maratona de São Paulo 2024",
    price: 120.00,
    categories: {
      normal: [
        { id: "5k", name: "5K - Corrida Popular", price: 45.00 },
        { id: "10k", name: "10K - Corrida Recreativa", price: 65.00 },
        { id: "21k", name: "21K - Meia Maratona", price: 95.00 },
        { id: "42k", name: "42K - Maratona Completa", price: 120.00 }
      ],
      pcd: [
        { id: "5k-pcd", name: "5K - PCD Ambulante", price: 45.00 },
        { id: "10k-pcd", name: "10K - PCD Ambulante", price: 65.00 },
        { id: "wheelchair-5k", name: "5K - Cadeirante", price: 45.00 },
        { id: "wheelchair-10k", name: "10K - Cadeirante", price: 65.00 }
      ]
    }
  };

  const getAvailableCategories = () => {
    if (formData.modality === "normal") {
      return event.categories.normal;
    } else if (formData.modality === "pcd") {
      return event.categories.pcd;
    }
    return [];
  };

  const selectedCategory = getAvailableCategories().find(cat => cat.id === formData.category);

  const kitOptions = [
    { 
      id: "shirt", 
      name: "Camiseta Oficial", 
      description: "Camiseta técnica oficial do evento",
      price: 0,
      required: true,
      sizes: ["PP", "P", "M", "G", "GG", "XGG"]
    },
    { 
      id: "medal", 
      name: "Medalha de Participação", 
      description: "Medalha personalizada para finalizadores",
      price: 0,
      required: true
    },
    { 
      id: "bag", 
      name: "Sacola Oficial", 
      description: "Sacola esportiva com logo do evento",
      price: 25.00,
      required: false
    },
    { 
      id: "cap", 
      name: "Boné Oficial", 
      description: "Boné com proteção UV",
      price: 35.00,
      required: false
    },
    { 
      id: "bottle", 
      name: "Squeeze Personalizado", 
      description: "Garrafa esportiva 500ml",
      price: 20.00,
      required: false
    }
  ];

  const handleKitSelection = (itemId: string, selected: boolean) => {
    setFormData(prev => ({
      ...prev,
      kitItems: {
        ...prev.kitItems,
        [itemId]: selected
      }
    }));
  };

  const calculateTotalPrice = () => {
    const basePrice = selectedCategory?.price || event.price;
    const kitPrice = kitOptions.reduce((total, item) => {
      if (formData.kitItems[item.id as keyof typeof formData.kitItems]) {
        return total + item.price;
      }
      return total;
    }, 0);
    return basePrice + kitPrice;
  };

  const handleInputChange = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof typeof prev] as any),
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
    
    // Limpar categoria se modalidade mudar
    if (field === 'modality') {
      setFormData(prev => ({
        ...prev,
        category: ""
      }));
    }
  };

  const handlePayment = (method: string, amount: number) => {
    console.log(`Pagamento de R$ ${amount.toFixed(2)} via ${method}`);
    setPaymentCompleted(true);
    setTimeout(() => {
      navigate("/inscricoes");
    }, 3000);
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (paymentCompleted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-12 flex items-center justify-center">
          <Card className="card-glow max-w-md text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Inscrição Confirmada!</h2>
              <p className="text-muted-foreground mb-4">
                Sua inscrição foi processada com sucesso. Em breve você receberá um email com todos os detalhes.
              </p>
              <p className="text-sm text-muted-foreground">
                Redirecionando para suas inscrições...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            className="mb-6 text-primary hover:text-primary/80"
            onClick={() => navigate(`/evento/${id}`)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao evento
          </Button>

          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  1
                </div>
                <div className={`w-16 h-1 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  2
                </div>
                <div className={`w-16 h-1 ${step >= 3 ? 'bg-primary' : 'bg-muted'}`} />
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  3
                </div>
                <div className={`w-16 h-1 ${step >= 4 ? 'bg-primary' : 'bg-muted'}`} />
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  4
                </div>
                <div className={`w-16 h-1 ${step >= 5 ? 'bg-primary' : 'bg-muted'}`} />
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 5 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  5
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                {step === 1 && (
                  <Card className="card-glow">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <User className="w-5 h-5 text-primary" />
                        <span>Dados Pessoais</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName">Nome Completo *</Label>
                          <Input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                            placeholder="Seu nome completo"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="phone">Telefone *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="(11) 99999-9999"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cpf">CPF *</Label>
                          <Input
                            id="cpf"
                            value={formData.cpf}
                            onChange={(e) => handleInputChange("cpf", e.target.value)}
                            placeholder="000.000.000-00"
                          />
                        </div>
                        <div>
                          <Label htmlFor="birthDate">Data de Nascimento *</Label>
                          <Input
                            id="birthDate"
                            type="date"
                            value={formData.birthDate}
                            onChange={(e) => handleInputChange("birthDate", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="gender">Gênero *</Label>
                          <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o gênero" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="M">Masculino</SelectItem>
                              <SelectItem value="F">Feminino</SelectItem>
                              <SelectItem value="O">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="shirtSize">Tamanho da Camiseta *</Label>
                          <Select value={formData.shirtSize} onValueChange={(value) => handleInputChange("shirtSize", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o tamanho" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="PP">PP</SelectItem>
                              <SelectItem value="P">P</SelectItem>
                              <SelectItem value="M">M</SelectItem>
                              <SelectItem value="G">G</SelectItem>
                              <SelectItem value="GG">GG</SelectItem>
                              <SelectItem value="XGG">XGG</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Separator />

                      {/* Emergency Contact */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg flex items-center">
                          <Phone className="w-5 h-5 mr-2 text-primary" />
                          Contato de Emergência
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="emergencyName">Nome *</Label>
                            <Input
                              id="emergencyName"
                              value={formData.emergencyContact.name}
                              onChange={(e) => handleInputChange("emergencyContact.name", e.target.value)}
                              placeholder="Nome do contato"
                            />
                          </div>
                          <div>
                            <Label htmlFor="emergencyPhone">Telefone *</Label>
                            <Input
                              id="emergencyPhone"
                              value={formData.emergencyContact.phone}
                              onChange={(e) => handleInputChange("emergencyContact.phone", e.target.value)}
                              placeholder="(11) 99999-9999"
                            />
                          </div>
                          <div>
                            <Label htmlFor="relationship">Parentesco *</Label>
                            <Input
                              id="relationship"
                              value={formData.emergencyContact.relationship}
                              onChange={(e) => handleInputChange("emergencyContact.relationship", e.target.value)}
                              placeholder="Ex: Cônjuge, Pai/Mãe"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button className="btn-primary" onClick={nextStep}>
                          PRÓXIMO PASSO
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {step === 2 && (
                  <Card className="card-glow">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Accessibility className="w-5 h-5 text-primary" />
                        <span>Modalidade</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label className="text-base font-medium mb-4 block">
                          Selecione sua modalidade *
                        </Label>
                        <RadioGroup 
                          value={formData.modality} 
                          onValueChange={(value) => handleInputChange("modality", value)}
                          className="space-y-4"
                        >
                          <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                            <RadioGroupItem value="normal" id="normal" />
                            <Label htmlFor="normal" className="cursor-pointer flex-1">
                              <div>
                                <h3 className="font-medium">Modalidade Normal</h3>
                                <p className="text-sm text-muted-foreground">
                                  Participação convencional sem necessidades especiais
                                </p>
                              </div>
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                            <RadioGroupItem value="pcd" id="pcd" />
                            <Label htmlFor="pcd" className="cursor-pointer flex-1">
                              <div>
                                <h3 className="font-medium">Pessoa com Deficiência (PCD)</h3>
                                <p className="text-sm text-muted-foreground">
                                  Inclui modalidades para PCD ambulante e cadeirante
                                </p>
                              </div>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {formData.modality === "pcd" && (
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-medium text-blue-900 mb-2">Informações Importantes para PCD</h4>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Largada antecipada em 15 minutos</li>
                            <li>• Apoio especializado durante o percurso</li>
                            <li>• Hidratação prioritária nos pontos de apoio</li>
                            <li>• Certificado específico para modalidade PCD</li>
                          </ul>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <Button variant="outline" onClick={prevStep}>
                          VOLTAR
                        </Button>
                        <Button 
                          className="btn-primary" 
                          onClick={nextStep}
                          disabled={!formData.modality}
                        >
                          PRÓXIMO PASSO
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {step === 3 && (
                  <Card className="card-glow">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-primary" />
                        <span>Categoria e Endereço</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label className="text-base font-medium">Escolha sua Categoria *</Label>
                        <p className="text-sm text-muted-foreground mb-3">
                          Categorias disponíveis para modalidade: {formData.modality === "normal" ? "Normal" : "PCD"}
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          {getAvailableCategories().map((category) => (
                            <div
                              key={category.id}
                              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                                formData.category === category.id 
                                  ? "border-primary bg-primary/10" 
                                  : "border-border hover:border-primary/50"
                              }`}
                              onClick={() => handleInputChange("category", category.id)}
                            >
                              <div className="flex justify-between items-center">
                                <div>
                                  <h3 className="font-medium">{category.name}</h3>
                                  <p className="text-sm text-muted-foreground">
                                    {category.id.includes("wheelchair") ? "Cadeirante" : 
                                     category.id.includes("pcd") ? "PCD Ambulante" : 
                                     `Distância: ${category.id.replace("-pcd", "").toUpperCase()}`}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <div className="text-lg font-bold text-primary">
                                    R$ {category.price.toFixed(2)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Address */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg flex items-center">
                          <MapPin className="w-5 h-5 mr-2 text-primary" />
                          Endereço
                        </h3>
                        <div className="grid md:grid-cols-4 gap-4">
                          <div className="md:col-span-3">
                            <Label htmlFor="street">Rua *</Label>
                            <Input
                              id="street"
                              value={formData.address.street}
                              onChange={(e) => handleInputChange("address.street", e.target.value)}
                              placeholder="Nome da rua"
                            />
                          </div>
                          <div>
                            <Label htmlFor="number">Número *</Label>
                            <Input
                              id="number"
                              value={formData.address.number}
                              onChange={(e) => handleInputChange("address.number", e.target.value)}
                              placeholder="123"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="city">Cidade *</Label>
                            <Input
                              id="city"
                              value={formData.address.city}
                              onChange={(e) => handleInputChange("address.city", e.target.value)}
                              placeholder="São Paulo"
                            />
                          </div>
                          <div>
                            <Label htmlFor="state">Estado *</Label>
                            <Input
                              id="state"
                              value={formData.address.state}
                              onChange={(e) => handleInputChange("address.state", e.target.value)}
                              placeholder="SP"
                            />
                          </div>
                          <div>
                            <Label htmlFor="zipCode">CEP *</Label>
                            <Input
                              id="zipCode"
                              value={formData.address.zipCode}
                              onChange={(e) => handleInputChange("address.zipCode", e.target.value)}
                              placeholder="00000-000"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button variant="outline" onClick={prevStep}>
                          VOLTAR
                        </Button>
                        <Button className="btn-primary" onClick={nextStep}>
                          PRÓXIMO PASSO
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {step === 4 && (
                  <Card className="card-glow">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-primary" />
                        <span>Kit do Atleta</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label className="text-base font-medium">Selecione os itens do seu kit</Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          Escolha os itens que deseja receber no seu kit do atleta
                        </p>
                      </div>

                      <div className="space-y-4">
                        {kitOptions.map((item) => (
                          <div
                            key={item.id}
                            className={`p-4 border rounded-lg transition-all ${
                              formData.kitItems[item.id as keyof typeof formData.kitItems] 
                                ? "border-primary bg-primary/10" 
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-start space-x-3">
                                <Checkbox
                                  id={item.id}
                                  checked={formData.kitItems[item.id as keyof typeof formData.kitItems]}
                                  onCheckedChange={(checked) => 
                                    handleKitSelection(item.id, checked as boolean)
                                  }
                                  disabled={item.required}
                                />
                                <div className="flex-1">
                                  <Label htmlFor={item.id} className="font-medium cursor-pointer">
                                    {item.name}
                                    {item.required && <span className="text-red-500 ml-1">*</span>}
                                  </Label>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {item.description}
                                  </p>
                                  {item.sizes && formData.kitItems[item.id as keyof typeof formData.kitItems] && (
                                    <div className="mt-3">
                                      <Label className="text-sm font-medium">Tamanho:</Label>
                                      <div className="flex flex-wrap gap-2 mt-1">
                                        {item.sizes.map((size) => (
                                          <Button
                                            key={size}
                                            variant={formData.shirtSize === size ? "default" : "outline"}
                                            size="sm"
                                            onClick={() => handleInputChange("shirtSize", size)}
                                          >
                                            {size}
                                          </Button>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="text-right">
                                {item.price > 0 ? (
                                  <div className="text-lg font-bold text-primary">
                                    + R$ {item.price.toFixed(2)}
                                  </div>
                                ) : (
                                  <div className="text-sm text-green-600 font-medium">
                                    Incluso
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between">
                        <Button variant="outline" onClick={prevStep}>
                          VOLTAR
                        </Button>
                        <Button className="btn-primary" onClick={nextStep}>
                          PRÓXIMO PASSO
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {step === 5 && (
                  <PaymentForm 
                    eventPrice={calculateTotalPrice()}
                    eventName={event.name}
                    onPayment={handlePayment}
                  />
                )}
              </div>

              {/* Registration Summary */}
              <div className="space-y-6">
                <Card className="card-glow sticky top-24">
                  <CardHeader>
                    <CardTitle>Resumo da Inscrição</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold">{event.name}</h3>
                        <p className="text-sm text-muted-foreground">Evento esportivo</p>
                      </div>
                      
                      {formData.modality && (
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <p className="font-medium">
                            Modalidade: {formData.modality === "normal" ? "Normal" : "PCD"}
                          </p>
                        </div>
                      )}
                      
                      {selectedCategory && (
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <p className="font-medium">{selectedCategory.name}</p>
                          <p className="text-sm text-muted-foreground">
                            R$ {selectedCategory.price.toFixed(2)}
                          </p>
                        </div>
                      )}

                      {step >= 4 && (
                        <div className="space-y-2">
                          <h4 className="font-medium">Itens do Kit:</h4>
                          {kitOptions.map((item) => (
                            formData.kitItems[item.id as keyof typeof formData.kitItems] && (
                              <div key={item.id} className="flex justify-between text-sm">
                                <span>{item.name}</span>
                                <span className="text-primary">
                                  {item.price > 0 ? `+R$ ${item.price.toFixed(2)}` : "Incluso"}
                                </span>
                              </div>
                            )
                          ))}
                        </div>
                      )}

                      <Separator />
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">O que está incluso:</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Chip de cronometragem</li>
                          <li>• Hidratação durante o percurso</li>
                          <li>• Seguro do evento</li>
                          <li>• Certificado digital</li>
                          {formData.modality === "pcd" && (
                            <li>• Apoio especializado para PCD</li>
                          )}
                        </ul>
                      </div>
                      
                      <Separator />
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          R$ {calculateTotalPrice().toFixed(2)}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Valor total
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Terms and Rules */}
                {step === 5 && (
                  <Card className="card-glow">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="terms" 
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => handleInputChange("agreeTerms", checked.toString())}
                        />
                        <Label htmlFor="terms" className="text-sm">
                          Aceito os <span className="text-primary underline cursor-pointer">termos de uso</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="rules"
                          checked={formData.agreeRules}
                          onCheckedChange={(checked) => handleInputChange("agreeRules", checked.toString())}
                        />
                        <Label htmlFor="rules" className="text-sm">
                          Aceito o <span className="text-primary underline cursor-pointer">regulamento do evento</span>
                        </Label>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;
