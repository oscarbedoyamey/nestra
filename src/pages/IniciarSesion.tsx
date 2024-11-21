import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface FormData {
  email: string;
  password: string;
}

interface RecoveryFormData {
  email: string;
}

const IniciarSesion = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const { register, handleSubmit } = useForm<FormData>();
  const { register: registerRecovery, handleSubmit: handleSubmitRecovery } = useForm<RecoveryFormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically handle the login logic
    toast.success("Inicio de sesión exitoso");
  };

  const onRecoverySubmit = (data: RecoveryFormData) => {
    console.log("Recovery email:", data.email);
    // Here you would typically handle the password recovery logic
    toast.success("Email de recuperación enviado");
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F5] py-32">
      <div className="container max-w-md mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#282D15] mb-2">Iniciar sesión</h1>
          <h2 className="text-xl text-[#282D15]/70 mb-8">Accede a tu área privada</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-[#282D15]">
                Email
              </label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className="w-full"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-[#282D15]">
                Contraseña
              </label>
              <Input
                id="password"
                type="password"
                {...register("password")}
                className="w-full"
                required
              />
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button type="button" className="text-sm text-[#282D15]/70 hover:text-[#282D15] transition-colors">
                  He olvidado mi contraseña
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-4">Restablece tu contraseña</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmitRecovery(onRecoverySubmit)} className="space-y-4">
                  <p className="text-[#282D15]/70">
                    Por favor, introduce la dirección de correo electrónico que utilizaste cuando te registraste en Nestra.
                    Te enviaremos un correo con un link para restablecer tu contraseña.
                  </p>
                  <div className="space-y-2">
                    <label htmlFor="recovery-email" className="block text-sm font-medium text-[#282D15]">
                      Email
                    </label>
                    <Input
                      id="recovery-email"
                      type="email"
                      {...registerRecovery("email")}
                      className="w-full"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-[#282D15] hover:bg-[#282D15]/90 text-white rounded-full"
                  >
                    Enviar email
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <Button 
              type="submit"
              className="w-full bg-[#282D15] hover:bg-[#282D15]/90 text-white rounded-full"
            >
              Iniciar sesión
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;