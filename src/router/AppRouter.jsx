import { Route, Routes } from "react-router-dom"
import { AuthRoute } from "../auth/routes/AuthRoute"
import { JournalRoute } from "../journal/routes/JournalRoute"

export const AppRouter = () => {
  return (
    <div>

        <Routes>

            {/* Auth */}
            <Route path="/auth/*" element={ <AuthRoute /> } />

            {/* Journal */}
            <Route path="/*" element={ <JournalRoute /> } />

        </Routes>

    </div>
  )
}
