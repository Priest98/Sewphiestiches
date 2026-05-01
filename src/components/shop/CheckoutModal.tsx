import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useShopStore } from "@/store/useShopStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, ArrowRight, CreditCard, Send, CheckCircle2, Loader2 } from "lucide-react";
import { usePaystackPayment } from "react-paystack";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const schema = z.object({
  fullName: z.string().min(3, "Full name required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Valid phone required"),
  address: z.string().min(5, "Full delivery address required"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export const CheckoutModal = () => {
  const { isCheckoutOpen, setCheckoutOpen, cart, resetOrder, clearCart } = useShopStore();
  const [step, setStep] = useState(1);
  const [measurements, setMeasurements] = useState<Record<string, string>>({});
  const [isVerifying, setIsVerifying] = useState(false);
  const [pendingOrderId, setPendingOrderId] = useState<string | null>(null);
  const orderIdRef = useRef<string | null>(null);
  
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const { register, handleSubmit, getValues, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  });

  if (!isCheckoutOpen || cart.length === 0) return null;

  // Paystack Config
  const paystackConfig = {
    reference: orderIdRef.current || (new Date()).getTime().toString(),
    email: getValues("email") || "customer@sewphiestitches.com",
    amount: cartTotal * 100,
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
  };

  const handleVerification = async (reference: any, currentOrderId: string | null) => {
    setIsVerifying(true);
    try {
      const { data, error } = await supabase.functions.invoke('verify-payment', {
        body: { reference: reference.reference, order_id: currentOrderId }
      });

      if (error || !data.success) throw new Error(error?.message || "Verification failed");

      setStep(4);
    } catch (err: any) {
      console.error(err);
      toast.error("Payment verification failed. Please contact support.");
    } finally {
      setIsVerifying(false);
    }
  };

  const onSuccess = (reference: any) => {
    handleVerification(reference, orderIdRef.current);
  };

  const onClose = () => {
    toast.info("Payment sequence cancelled.");
  };

  const initializePayment = usePaystackPayment(paystackConfig);

  const createPendingOrder = async () => {
    const data = getValues();
    try {
      // 1. Create the master order row
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          customer_name: data.fullName,
          email: data.email,
          phone: data.phone,
          address: data.address,
          total_amount: cartTotal,
          notes: data.notes
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // 2. Create the order item
      const orderItemsToInsert = cart.map(item => ({
        order_id: order.id,
        product_id: item.id,
        product_name: `${item.quantity}x ${item.name}`,
        price: item.price * item.quantity,
        custom_measurements: measurements
      }));

      const { error: itemError } = await supabase
        .from('order_items')
        .insert(orderItemsToInsert);

      if (itemError) throw itemError;

      orderIdRef.current = order.id;
      setPendingOrderId(order.id);
      return order.id;
    } catch (err) {
      console.warn("Supabase order tracking skipped (check configuration):", err);
      const localRef = `REF_${Date.now()}`;
      orderIdRef.current = localRef;
      setPendingOrderId(localRef);
      return localRef;
    }
  };

  const startPaymentFlow = async () => {
    if (!import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || import.meta.env.VITE_PAYSTACK_PUBLIC_KEY === 'your_paystack_public_key') {
      toast.error("Paystack Public Key is missing or invalid in .env file");
      return;
    }

    const orderId = await createPendingOrder();
    if (orderId) {
      setTimeout(() => {
        initializePayment({ onSuccess, onClose });
      }, 100);
    }
  };

  const handleWhatsAppOrder = async (data: FormData) => {
    setIsVerifying(true);
    await createPendingOrder(); // Persist even for manual orders
    const message = `Hello Sewphie Stitches! I'd like to order:
${cart.map(item => `* ${item.quantity}x ${item.name} (₦${item.price.toLocaleString()} each)`).join('\n')}

*Total:* ₦${cartTotal.toLocaleString()}

*Customer Details:*
- Name: ${data.fullName}
- Email: ${data.email}
- Phone: ${data.phone}
- Address: ${data.address}

*Measurements:*
${Object.entries(measurements).map(([k, v]) => `- ${k}: ${v}`).join("\n")}

I'd like to finalize this order. Looking forward to your response!`;
    
    setTimeout(() => {
      window.location.href = `https://wa.me/2349065368362?text=${encodeURIComponent(message)}`;
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-bottle-deep/90 backdrop-blur-md"
          onClick={() => setCheckoutOpen(false)}
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-2xl overflow-hidden shadow-2xl rounded-sm"
        >
          {/* Header */}
          <div className="bg-bottle-deep p-8 text-cream flex justify-between items-center border-b border-gold/20">
            <div>
              <p className="text-[0.6rem] uppercase tracking-widest text-gold mb-1">Luxury Order Flow</p>
              <h2 className="font-display text-2xl">Secure Your Order</h2>
              <p className="text-[0.65rem] text-gold/60 mt-1 font-light">Complete your order and make payment securely. Our team will begin processing immediately after confirmation.</p>
            </div>
            <button onClick={() => setCheckoutOpen(false)} className="hover:rotate-90 transition-transform">
              <X className="w-6 h-6 text-gold" />
            </button>
          </div>

          <div className="p-8 md:p-12">
            {/* Progress */}
            {step < 4 && (
              <div className="flex justify-between mb-12 relative">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gold/20 -translate-y-1/2 z-0" />
                {steps.map((s, i) => (
                  <div key={i} className={`relative z-10 flex flex-col items-center gap-2 px-2 bg-white`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[0.65rem] border transition-colors ${
                      step >= i + 1 ? "bg-gold text-bottle-deep border-gold" : "border-gold/20 text-gold/40"
                    }`}>
                      {s.icon}
                    </div>
                    <span className={`text-[0.55rem] uppercase tracking-widest ${
                      step >= i + 1 ? "text-bottle-deep font-bold" : "text-gold/30"
                    }`}>{s.title}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="min-h-[350px]">
              {isVerifying ? (
                <div className="flex flex-col items-center justify-center py-20 animate-pulse text-center space-y-4">
                  <Loader2 className="w-12 h-12 text-gold animate-spin" />
                  <p className="text-[0.7rem] uppercase tracking-widest text-gold">Verifying Payment Artistry...</p>
                </div>
              ) : (
                <>
                  {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="Full Name" name="fullName" register={register} error={errors.fullName} />
                        <InputField label="Email Address" name="email" type="email" register={register} error={errors.email} />
                        <InputField label="Phone Number" name="phone" placeholder="090..." register={register} error={errors.phone} />
                        <InputField label="Delivery Address" name="address" register={register} error={errors.address} />
                      </div>
                      <div className="pt-8">
                        <button 
                          disabled={!isValid}
                          onClick={() => setStep(2)}
                          className="w-full bg-bottle-deep text-cream py-5 flex items-center justify-center gap-4 text-[0.65rem] uppercase tracking-luxury hover:bg-bottle-deep/90 disabled:opacity-50 transition-all"
                        >
                          Next: Measurements <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {["Bust", "Waist", "Hip"].map(m => (
                          <div key={m}>
                            <label className="text-[0.6rem] uppercase tracking-widest text-gold block mb-2">{m}</label>
                            <input 
                              type="text"
                              onChange={(e) => setMeasurements(prev => ({ ...prev, [m]: e.target.value }))}
                              className="w-full bg-cream border-b border-bottle-deep/10 p-4 focus:border-gold outline-none text-sm transition-all"
                              placeholder="00.0 cm"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-8">
                        <button onClick={() => setStep(1)} className="flex-1 py-5 border border-bottle-deep/10 text-bottle-deep text-[0.65rem] uppercase tracking-luxury">Back</button>
                        <button onClick={() => setStep(3)} className="flex-[2] bg-bottle-deep text-cream py-5 text-[0.65rem] uppercase tracking-luxury">Next: Payment</button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 text-center">
                      <div className="bg-cream p-8 text-bottle-deep space-y-2">
                        <p className="text-[0.65rem] uppercase tracking-luxury text-gold">Order Summary</p>
                        <h3 className="font-display text-4xl">{cart.length === 1 ? cart[0].name : `${cart.length} Items`}</h3>
                        <p className="text-2xl font-light">₦{cartTotal.toLocaleString()}</p>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        <button 
                          onClick={startPaymentFlow}
                          className="w-full bg-gradient-gold text-bottle-deep py-6 flex items-center justify-center gap-4 text-[0.7rem] uppercase tracking-[0.3em] font-bold shadow-luxury transition-all hover:scale-[1.02]"
                        >
                          <CreditCard className="w-5 h-5" /> Pay Now with Paystack
                        </button>
                        <button 
                          onClick={handleSubmit(handleWhatsAppOrder)}
                          className="w-full border border-bottle-deep/10 py-6 flex items-center justify-center gap-4 text-[0.65rem] uppercase tracking-luxury text-bottle-soft hover:bg-cream transition-all"
                        >
                          <Send className="w-4 h-4" /> Order via WhatsApp (Manual)
                        </button>
                      </div>
                      <p className="text-[0.55rem] uppercase tracking-widest text-gold/60">Secure encrypted checkout powered by Paystack.</p>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      className="flex flex-col items-center justify-center text-center space-y-6 py-12"
                    >
                      <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-12 h-12 text-gold animate-pulse" />
                      </div>
                      <h2 className="font-display text-4xl text-bottle-deep">Your Presence is Secured.</h2>
                      <p className="text-sm font-light text-bottle-soft max-w-xs mx-auto leading-relaxed">
                        Your order has been received and is now in the hands of our master artisans. Expect a reach-out from our team within 24 hours.
                      </p>
                      <button 
                        onClick={() => { resetOrder(); clearCart(); setCheckoutOpen(false); setStep(1); }}
                        className="mt-8 px-12 py-5 bg-gradient-gold text-bottle-deep text-[0.65rem] uppercase tracking-luxury font-bold"
                      >
                        Return to House
                      </button>
                    </motion.div>
                  )}
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const InputField = ({ label, name, type = "text", register, error, placeholder }: any) => (
  <div>
    <label className="text-[0.6rem] uppercase tracking-widest text-gold block mb-2">{label}</label>
    <input 
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={`w-full bg-cream border-b p-4 focus:border-gold outline-none text-sm transition-all ${
        error ? "border-red-400" : "border-bottle-deep/10"
      }`}
    />
    {error && <p className="text-[0.5rem] text-red-500 mt-1 uppercase tracking-widest">{error.message}</p>}
  </div>
);

const steps = [
  { title: "Personal Details", icon: "01" },
  { title: "Measurements", icon: "02" },
  { title: "Payment Method", icon: "03" },
];
