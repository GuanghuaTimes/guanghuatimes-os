import { CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function EventCardSkeleton() {
    return (
        <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full flex flex-col">
            <div className="relative bg-gray-100">
                <AspectRatio ratio={4/3}>
                    <Skeleton className="w-full h-full" />
                </AspectRatio>
                <Skeleton className="absolute top-3 left-3 h-6 w-16 rounded-full" />
                <Skeleton className="absolute top-3 right-3 h-6 w-16 rounded-full" />
            </div>

            <div className="p-4 flex-1 flex flex-col">
                <CardHeader className="space-y-3 p-0 mb-3">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-2/3" />
                </CardHeader>

                <div className="mt-auto pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-3 w-16" />
                    </div>
                </div>
            </div>
        </article>
    );
}