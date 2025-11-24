import Hero from "@/components/Hero";
import CommunityInfo from "@/components/CommunityInfo";
import SignupForm from "@/components/SignupForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <CommunityInfo />
      <SignupForm />
      
      <footer className="bg-card py-8 border-t border-border">
        <div className="container px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 komm-folge-mir-nach.de – Eine Gemeinschaft der Nachfolge Jesu
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
