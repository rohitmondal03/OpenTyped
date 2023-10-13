import LoadingAnimation from "@/components/loading-state"

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen space-x-4">
            <LoadingAnimation />
        </div>
    )
}
