import { useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const storeProfileSchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1)
})

type StoreProfileData = z.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {
    const { data: managedRestaurant, isLoading: isManagedRestaurantLoading } = useQuery({
        queryFn: getManagedRestaurant,
        queryKey: ["managed-restaurant"]
    })

    const {
        register,
        handleSubmit
    } = useForm<StoreProfileData>({
        resolver: zodResolver(storeProfileSchema),
        values: {
            name: managedRestaurant?.name ?? "",
            description: managedRestaurant?.description ?? ""
        }
    })

    return (
        <DialogContent className="bg-background text-foreground dark:border-slate-800">
            <DialogHeader>
                <DialogTitle>Perfil da loja</DialogTitle>
                <DialogDescription>Atualize as informações do seu estabelecimento</DialogDescription>
            </DialogHeader>

            <form>

                <div className="space-y-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="name">Nome</Label>
                        <Input
                            className="col-span-3"
                            id="name"
                            {...register("name")}
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="description">Descrição</Label>
                        <Textarea
                            className="col-span-3 resize-none"
                            id="description"
                            {...register("description")}
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        variant="ghost"
                        type="button"
                        >
                        Cancelar
                    </Button>
                    <Button
                        variant="success"
                        type="submit"
                        >
                        Salvar
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}