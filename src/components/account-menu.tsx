import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown, LogOut } from "lucide-react";

export function AccountMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none">
                    PizzaDash
                    <ChevronDown className="h-5 w-5"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    <span>Rodrigo Teixeira</span>
                    <span className="text-xs font-normal text-muted-foreground">rodrigoteix1998@gmail.com</span>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <Building className="h-5 w-5 mr-2"/>
                    <span>Perfil da loja</span>
                </DropdownMenuItem>


                <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                    <LogOut className="h-5 w-5 mr-2"/>
                    <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}