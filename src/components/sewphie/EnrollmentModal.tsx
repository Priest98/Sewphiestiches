import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useShopStore } from "@/store/useShopStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, CreditCard, CheckCircle2, Loader2, ArrowRight, Check } from "lucide-react";
import { usePaystackPayment } from "react-paystack";
import { toast } from "sonner";

const schema = z.object({
  fullName: z.string().min(3, "Full name required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Valid phone required"),
  program: z.string(),
  paymentPlan: z.enum(["100", "70"]),
});

type FormData = z.infer<typeof schema>;

export const EnrollmentModal = () => {
  const { isEnrollmentOpen, setEnrollmentOpen } = useShopStore();
  const [isVerifying, setIsVerifying] = useState(false);
  const [step, setStep] = useState(1); // 1 = Form, 2 = Payment summary, 3 = Success
  const [paystackRef, setPaystackRef] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"paystack" | "bank">("paystack");

  const { register, handleSubmit, watch, getValues, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      program: "Beginner's Program",
      paymentPlan: "100"
    },
    mode: "onChange"
  });

  const selectedPlan = watch("paymentPlan");
  const selectedProgram = watch("program");

  // Price calculations: Registration Fee = 10,000; Training Fee = 300,000
  // 100% Plan = 310,000 (Tuition 300k + Reg 10k)
  // 70% Plan = 220,000 (Tuition 210k + Reg 10k)
  const getAmount = (plan: "100" | "70") => {
    return plan === "100" ? 310000 : 220000;
  };

  const amountToPay = getAmount(selectedPlan);

  if (!isEnrollmentOpen) return null;

  // Generate reference on the fly for Paystack
  const reference = (new Date()).getTime().toString();

  // Paystack Config
  const paystackConfig = {
    reference,
    email: getValues("email") || "student@sewphiestitches.com",
    amount: amountToPay * 100, // Paystack expects amount in kobo
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
  };

  const handleSuccessRedirect = (referenceObj: any) => {
    setIsVerifying(true);
    setPaystackRef(referenceObj.reference);

    const data = getValues();
    const planLabel = data.paymentPlan === "100" ? "100% Full Payment" : "70% Part Payment";
    
    // Format WhatsApp Message with Paystack details
    const message = `Hello Sewphie Stitches! I have successfully completed my Academy Enrollment payment.

*Payment Status:* Paid (Paystack Ref: ${referenceObj.reference})
*Paid Amount:* ₦${amountToPay.toLocaleString()} (${planLabel})
*Program:* ${data.program}

*Student Details:*
- Name: ${data.fullName}
- Email: ${data.email}
- Phone: ${data.phone}

Please confirm my admission slot. Thank you!`;

    const whatsappUrl = `https://wa.me/2349065368362?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      setIsVerifying(false);
      setStep(3);
      window.location.href = whatsappUrl;
    }, 1500);
  };

  const handleBankTransferRedirect = () => {
    setIsVerifying(true);

    const data = getValues();
    const planLabel = data.paymentPlan === "100" ? "100% Full Payment" : "70% Part Payment";
    
    // Format WhatsApp Message with Bank Transfer details
    const message = `Hello Sewphie Stitches! I have completed my Academy Enrollment payment via Bank Transfer.

*Payment Method:* Bank Transfer
*Expected Amount:* ₦${amountToPay.toLocaleString()} (${planLabel})
*Program:* ${data.program}

*Student Details:*
- Name: ${data.fullName}
- Email: ${data.email}
- Phone: ${data.phone}

I have made the transfer to Access Bank (1915543110). I have attached my transfer receipt to this message. Please verify my payment.`;

    const whatsappUrl = `https://wa.me/2349065368362?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      setIsVerifying(false);
      setStep(3);
      window.location.href = whatsappUrl;
    }, 1500);
  };

  const onSuccess = (referenceObj: any) => {
    handleSuccessRedirect(referenceObj);
  };

  const onClose = () => {
    toast.info("Payment sequence cancelled.");
  };

  const initializePayment = usePaystackPayment(paystackConfig);

  const handleNextStep = () => {
    if (isValid) {
      setStep(2);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-bottle-deep/90 backdrop-blur-md"
          onClick={() => setEnrollmentOpen(false)}
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-2xl overflow-hidden shadow-2xl rounded-sm z-10"
        >
          {/* Header */}
          <div className="bg-bottle-deep p-8 text-cream flex justify-between items-center border-b border-gold/20">
            <div>
              <p className="text-[0.6rem] uppercase tracking-widest text-gold mb-1">Sewphie Fashion Academy</p>
              <h2 className="font-display text-2xl">Secure Your Admission</h2>
              <p className="text-[0.65rem] text-gold/60 mt-1 font-light">Complete the form below to enroll and make your tuition deposit.</p>
            </div>
            <button onClick={() => setEnrollmentOpen(false)} className="hover:rotate-90 transition-transform">
              <X className="w-6 h-6 text-gold" />
            </button>
          </div>

          <div className="p-8 md:p-12 max-h-[75vh] overflow-y-auto">
            {isVerifying ? (
              <div className="flex flex-col items-center justify-center py-20 animate-pulse text-center space-y-4">
                <Loader2 className="w-12 h-12 text-gold animate-spin" />
                <p className="text-[0.7rem] uppercase tracking-widest text-gold">
                  {paymentMethod === "paystack" ? "Verifying Payment..." : "Submitting Details..."}
                </p>
              </div>
            ) : (
              <>
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Full Name" name="fullName" register={register} error={errors.fullName} />
                      <InputField label="Email Address" name="email" type="email" register={register} error={errors.email} />
                      <InputField label="Phone Number" name="phone" placeholder="E.g. 090..." register={register} error={errors.phone} />
                      
                      {/* Program Select */}
                      <div>
                        <label className="text-[0.6rem] uppercase tracking-widest text-gold block mb-2">Program of Interest</label>
                        <select 
                          {...register("program")}
                          className="w-full bg-cream border-b border-bottle-deep/10 p-4 focus:border-gold outline-none text-sm transition-all text-bottle-deep"
                        >
                          <option value="Beginner's Program">Beginner's Program</option>
                          <option value="Intermediate Level">Intermediate Level</option>
                          <option value="Advanced / Bridal Masterclass">Advanced / Bridal Masterclass</option>
                        </select>
                      </div>

                      {/* Payment Plan Select */}
                      <div className="md:col-span-2">
                        <label className="text-[0.6rem] uppercase tracking-widest text-gold block mb-3">Select Payment Plan</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <label className={`border p-5 flex flex-col justify-between cursor-pointer transition-all ${
                            selectedPlan === "100" ? "border-gold bg-gold/5" : "border-bottle-deep/10 bg-white"
                          }`}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-semibold uppercase text-bottle-deep">100% Full Payment</span>
                              <input type="radio" value="100" {...register("paymentPlan")} className="accent-gold" />
                            </div>
                            <span className="text-[0.65rem] text-bottle-soft font-light leading-relaxed">
                              Pay Registration Fee (₦10k) + Full Tuition (₦300k).
                            </span>
                            <span className="text-lg font-display text-gold mt-4">₦310,000</span>
                          </label>

                          <label className={`border p-5 flex flex-col justify-between cursor-pointer transition-all ${
                            selectedPlan === "70" ? "border-gold bg-gold/5" : "border-bottle-deep/10 bg-white"
                          }`}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-semibold uppercase text-bottle-deep">70% Part Payment</span>
                              <input type="radio" value="70" {...register("paymentPlan")} className="accent-gold" />
                            </div>
                            <span className="text-[0.65rem] text-bottle-soft font-light leading-relaxed">
                              Pay Registration Fee (₦10k) + 70% of Tuition (₦210k). Balance due mid-session.
                            </span>
                            <span className="text-lg font-display text-gold mt-4">₦220,000</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8">
                      <button 
                        disabled={!isValid}
                        onClick={handleNextStep}
                        className="w-full bg-bottle-deep text-cream py-5 flex items-center justify-center gap-4 text-[0.65rem] uppercase tracking-luxury hover:bg-bottle-deep/90 disabled:opacity-50 transition-all font-semibold"
                      >
                        Review Enrollment
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div className="bg-cream p-8 text-bottle-deep space-y-4 border border-gold/10">
                      <p className="text-[0.65rem] uppercase tracking-luxury text-gold">Admissions Summary</p>
                      
                      <div className="space-y-1">
                        <span className="text-xs uppercase tracking-widest text-bottle-soft font-medium">Selected Course</span>
                        <h3 className="font-display text-2xl md:text-3xl text-bottle-deep">{selectedProgram}</h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-bottle-deep/10 text-left">
                        <div>
                          <span className="text-[0.55rem] uppercase text-bottle-soft">Registration Fee</span>
                          <p className="text-sm font-medium text-bottle-deep">₦10,000</p>
                        </div>
                        <div>
                          <span className="text-[0.55rem] uppercase text-bottle-soft">Training Tuition Deposit</span>
                          <p className="text-sm font-medium text-bottle-deep">
                            {selectedPlan === "100" ? "₦300,000 (100%)" : "₦210,000 (70%)"}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-bottle-deep/10 flex justify-between items-center">
                        <span className="text-[0.65rem] uppercase tracking-widest text-gold font-bold">Total Due Now</span>
                        <span className="text-2xl font-display text-bottle-deep">₦{amountToPay.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Payment Method Tabs */}
                    <div className="space-y-3 pt-2">
                      <label className="text-[0.6rem] uppercase tracking-widest text-gold block font-semibold">Choose Payment Method</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setPaymentMethod("paystack")}
                          className={`py-3.5 text-[0.65rem] uppercase tracking-widest font-bold border transition-all ${
                            paymentMethod === "paystack" ? "bg-bottle-deep text-cream border-bottle-deep" : "border-bottle-deep/20 text-bottle-soft"
                          }`}
                        >
                          Pay Online (Paystack)
                        </button>
                        <button
                          onClick={() => setPaymentMethod("bank")}
                          className={`py-3.5 text-[0.65rem] uppercase tracking-widest font-bold border transition-all ${
                            paymentMethod === "bank" ? "bg-bottle-deep text-cream border-bottle-deep" : "border-bottle-deep/20 text-bottle-soft"
                          }`}
                        >
                          Bank Transfer
                        </button>
                      </div>
                    </div>

                    {/* Method Content */}
                    {paymentMethod === "paystack" ? (
                      <div className="pt-4">
                        <button 
                          onClick={() => initializePayment({ onSuccess, onClose })}
                          className="w-full bg-gradient-gold text-bottle-deep py-6 flex items-center justify-center gap-4 text-[0.7rem] uppercase tracking-[0.3em] font-bold shadow-luxury transition-all hover:scale-[1.02]"
                        >
                          <CreditCard className="w-5 h-5" /> Pay Now with Paystack
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4 pt-2">
                        <div className="bg-cream p-6 border border-gold/20 text-left rounded-md space-y-3 text-bottle-deep">
                          <p className="text-[0.6rem] uppercase tracking-widest text-gold font-bold">Transfer Account Details</p>
                          <div className="space-y-1 text-sm font-light">
                            <p>Account Name: <strong className="font-semibold text-bottle-deep">Sewphie Stitches</strong></p>
                            <p>Account Number: <strong className="font-mono font-bold text-bottle-deep text-base">1915543110</strong></p>
                            <p>Bank: <strong className="font-semibold text-bottle-deep">Access Bank</strong></p>
                          </div>
                          <p className="text-[0.6rem] text-bottle-soft/85 italic leading-relaxed pt-2 border-t border-bottle-deep/5">
                            Please transfer exactly **₦{amountToPay.toLocaleString()}** to the account details above, then click the confirmation button below. **Please attach your transfer receipt to the WhatsApp message.**
                          </p>
                        </div>
                        <button 
                          onClick={handleBankTransferRedirect}
                          className="w-full bg-gradient-gold text-bottle-deep py-6 flex items-center justify-center gap-4 text-[0.7rem] uppercase tracking-[0.3em] font-bold shadow-luxury transition-all hover:scale-[1.02]"
                        >
                          <Check className="w-5 h-5" /> I Have Made The Transfer
                        </button>
                      </div>
                    )}

                    <div className="flex justify-center gap-4 pt-2">
                      <button 
                        onClick={() => setStep(1)} 
                        className="text-[0.6rem] uppercase tracking-widest text-gold hover:underline"
                      >
                        Edit Details
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    className="flex flex-col items-center justify-center text-center space-y-6 py-12"
                  >
                    <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-12 h-12 text-gold animate-pulse" />
                    </div>
                    <h2 className="font-display text-4xl text-bottle-deep">Admission Submitted.</h2>
                    <p className="text-sm font-light text-bottle-soft max-w-md mx-auto leading-relaxed">
                      {paymentMethod === "paystack" 
                        ? `Your payment of **₦${amountToPay.toLocaleString()}** (Ref: ${paystackRef}) is complete.`
                        : `Your enrollment request of **₦${amountToPay.toLocaleString()}** via Bank Transfer has been sent.`
                      }
                      You are now being redirected to WhatsApp to finalize your onboarding.
                    </p>
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-xs text-bottle-deep/50 font-medium">If redirect doesn't happen automatically, click below:</p>
                      <button 
                        onClick={() => {
                          const data = getValues();
                          const planLabel = data.paymentPlan === "100" ? "100% Full Payment" : "70% Part Payment";
                          const message = paymentMethod === "paystack" 
                            ? `Hello Sewphie Stitches! I have successfully completed my Academy Enrollment payment.

*Payment Status:* Paid (Paystack Ref: ${paystackRef})
*Paid Amount:* ₦${amountToPay.toLocaleString()} (${planLabel})
*Program:* ${data.program}

*Student Details:*
- Name: ${data.fullName}
- Email: ${data.email}
- Phone: ${data.phone}

Please confirm my admission slot. Thank you!`
                            : `Hello Sewphie Stitches! I have completed my Academy Enrollment payment via Bank Transfer.

*Payment Method:* Bank Transfer
*Expected Amount:* ₦${amountToPay.toLocaleString()} (${planLabel})
*Program:* ${data.program}

*Student Details:*
- Name: ${data.fullName}
- Email: ${data.email}
- Phone: ${data.phone}

I have made the transfer to Access Bank (1915543110). I have attached my transfer receipt to this message. Please verify my payment.`;

                          window.location.href = `https://wa.me/2349065368362?text=${encodeURIComponent(message)}`;
                        }}
                        className="px-8 py-4 bg-gradient-gold text-bottle-deep text-[0.65rem] uppercase tracking-luxury font-bold flex items-center gap-2"
                      >
                        Open WhatsApp <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </>
            )}
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
      className={`w-full bg-cream border-b p-4 focus:border-gold outline-none text-sm transition-all text-bottle-deep ${
        error ? "border-red-400" : "border-bottle-deep/10"
      }`}
    />
    {error && <p className="text-[0.5rem] text-red-500 mt-1 uppercase tracking-widest">{error.message}</p>}
  </div>
);
