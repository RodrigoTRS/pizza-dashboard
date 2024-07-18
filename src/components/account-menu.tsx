import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { Skeleton } from "./ui/skeleton";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { StoreProfileDialog } from "./store-profile-dialog";

export function AccountMenu() {

    const { data: profile, isLoading: isProfileLoading } = useQuery({
        queryFn: getProfile,
        queryKey: ["profile"]
    })

    const { data: managedRestaurant, isLoading: isManagedRestaurantLoading } = useQuery({
        queryFn: getManagedRestaurant,
        queryKey: ["managed-restaurant"]
    })

    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2 select-none">
                        { isManagedRestaurantLoading
                            ? <Skeleton className="h-4 w-40"/>
                            : managedRestaurant?.name
                        }
                        <ChevronDown className="h-5 w-5"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="flex flex-col gap-2">
                        <span>
                            { isProfileLoading
                                ? <Skeleton className="h-4 w-32" />
                                : profile?.name
                            }
                        </span>
                        <span className="text-xs font-normal text-muted-foreground">
                            { isProfileLoading
                                ? <Skeleton className="h-4 w-24" />
                                : profile?.email
                            }
                        </span>
                    </DropdownMenuLabel>

                    <DropdownMenuSeparator />

                    <DialogTrigger asChild>
                        <DropdownMenuItem>
                            <Building className="h-5 w-5 mr-2"/>
                            <span>Perfil da loja</span>
                        </DropdownMenuItem>
                    </DialogTrigger>


                    <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                        <LogOut className="h-5 w-5 mr-2"/>
                        <span>Sair</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <StoreProfileDialog />
        </Dialog>
    )
}