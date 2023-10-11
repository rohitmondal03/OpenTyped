import LoadingAnimation from "@/components/loadingState"

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen space-x-4">
            <LoadingAnimation />
        </div>
    )
}
