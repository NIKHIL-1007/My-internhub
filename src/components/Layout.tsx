import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  LayoutDashboard, 
  Trophy, 
  Users, 
  LogOut,
  Gift
} from 'lucide-react';

const Layout = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                InternHub
              </h1>
              
              <div className="hidden md:flex space-x-4">
                <Link to="/dashboard">
                  <Button 
                    variant={isActive('/dashboard') ? 'default' : 'ghost'}
                    size="sm"
                    className="space-x-2"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Button>
                </Link>
                
                <Link to="/rewards">
                  <Button 
                    variant={isActive('/rewards') ? 'default' : 'ghost'}
                    size="sm"
                    className="space-x-2"
                  >
                    <Gift className="h-4 w-4" />
                    <span>Rewards</span>
                  </Button>
                </Link>
                
                <Link to="/leaderboard">
                  <Button 
                    variant={isActive('/leaderboard') ? 'default' : 'ghost'}
                    size="sm"
                    className="space-x-2"
                  >
                    <Trophy className="h-4 w-4" />
                    <span>Leaderboard</span>
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              
              <Link to="/login">
                <Button variant="ghost" size="sm" className="space-x-2">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;