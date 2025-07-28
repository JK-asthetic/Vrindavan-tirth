import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import OneDayVrindavanTour from "./components/OneDayVrindavanTour";
import ThreeDayTour from "./components/ThreeDayTour";
import Braj84KosYatra from "./components/Braj84KosYatra";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/1-day-vrindavan" component={OneDayVrindavanTour} />
      <Route path="/3-day-vrindavan-mathura-barsana" component={ThreeDayTour} />
      <Route path="/braj-84-kos-yatra" component={Braj84KosYatra} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
          <WouterRouter base="/Vrindavan-tirth">
            <Router />
          </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;