
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flame } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
          },
        });

        if (error) throw error;
        toast({
          title: "Cuenta creada",
          description: "Te has registrado correctamente. Ahora puedes iniciar sesión.",
        });
        setIsSignUp(false);
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        navigate("/");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-fogon-paper">
      <div className="flex items-center justify-center py-6 px-4">
        <div className="flex items-center gap-2">
          <Flame className="h-6 w-6 text-fogon-amber" />
          <span className="text-2xl font-handwritten text-fogon-dark">Truki</span>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 border border-fogon-red/10">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-handwritten text-fogon-dark mb-2">
              {isSignUp ? "Crear cuenta" : "Iniciar sesión"}
            </h1>
            <p className="text-fogon-dark/70 text-sm font-serif">
              {isSignUp
                ? "Regístrate para comprar en nuestro marketplace"
                : "Inicia sesión para continuar comprando"}
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="fullName">Nombre completo</Label>
                <Input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required={isSignUp}
                  placeholder="Juan Pérez"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="ejemplo@correo.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                minLength={6}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-fogon-amber hover:bg-fogon-ember text-fogon-cream"
              disabled={loading}
            >
              {loading
                ? "Procesando..."
                : isSignUp
                ? "Crear cuenta"
                : "Iniciar sesión"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-fogon-amber hover:text-fogon-ember text-sm font-serif"
            >
              {isSignUp
                ? "¿Ya tienes cuenta? Inicia sesión"
                : "¿No tienes cuenta? Regístrate"}
            </button>
          </div>
        </div>
      </div>

      <div className="py-4 text-center text-fogon-dark/60 text-sm font-serif">
        &copy; {new Date().getFullYear()} Truki. Todos los derechos reservados.
      </div>
    </div>
  );
};

export default Auth;
