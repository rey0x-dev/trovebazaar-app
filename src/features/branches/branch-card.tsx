import { Card, CardHeader, CardTitle, CardDescription,CardContent, CardFooter } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge"
import { cn } from "@/shared/lib/utils"
import { formatMXN } from "@/shared/lib/money"
import { formatShortDate } from "@/shared/lib/date"
import type { Branch } from "@/features/branches/schemas"

type BranchCardProps = {
    branch: Branch
} 

export function BranchCard({branch}: BranchCardProps) {
    const isArchived = branch.status === "archived"
    
    return(
        <Card className={cn(isArchived && "opacity-60")}>
            <CardHeader>
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <CardTitle className="font-semibold">
                            {branch.name}
                        </CardTitle>
                        
                        <CardDescription className="mt-1">
                            {branch.location}
                        </CardDescription>
                    </div>

                    <Badge
                        variant="outline"
                        className={
                        isArchived
                        ? ""
                        : "border-transparent bg-accent text-accent-foreground"
                    }
                    >
                        {isArchived ? "Archivada" : "Activa"}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-muted-foreground"> 
                            Ventas hoy
                        </p>
                        <p className="mt-1 font-semibold">
                            {isArchived ? "-" : formatMXN(branch.salesTodayCents)}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Promociones activas
                        </p>
                        <p className="mt-1 font-semibold">
                            {isArchived ? "-" : branch.activePromotions}
                        </p>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="text-sm text-muted-foreground">
                <p>
                    {isArchived ? "Archivada" : "Alta"}{" "}
                    {isArchived
                    ? branch.archivedAt
                    ? formatShortDate(branch.archivedAt)
                    : "-"
                    : formatShortDate(branch.createdAt)}
                </p>
            </CardFooter>
        </Card>
    )
}