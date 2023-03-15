import { Suspense } from "react"
import { Outlet } from "react-router-dom"

export const Layout: React.FC = () => {
    return (
        <main>
            <h1>Header</h1>
            <div>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet />
                </Suspense>
            </div>
        </main>
    )
}