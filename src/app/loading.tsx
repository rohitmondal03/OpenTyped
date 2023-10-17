import LoadingAnimation from "@/components/loading-state"

export default function Loading() {
    return (
        <div className="scale-90 xs:scale-100 flex items-center justify-center h-screen space-x-4">
            <LoadingAnimation />
        </div>
    )
}
