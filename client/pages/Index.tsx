import LoginForm from "@/components/auth/LoginForm"; // Ensure correct casing
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import DestinationsGrid from "@/components/site/DestinationsGrid";
import CTA from "@/components/site/CTA";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useAuth } from "@/hooks/useAuth";

export default function Index() {
  const { user } = useAuth();
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (!user) {
      setShowWelcome(true);
    } else {
      setShowWelcome(false);
      toast({
        title: "Welcome!",
        description: "Your travel assistant is ready.",
      });
    }
  }, [user]);

  return (
    <>
      <Toaster />
      {showWelcome ? (
        <LoginForm onSuccess={() => setShowWelcome(false)} />
      ) : (
        <main className="bg-background text-foreground">
          <Hero />
          <Services />
          <DestinationsGrid />
          <CTA />
        </main>
      )}
    </>
  );
}
