import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Trophy, 
  Medal, 
  Award, 
  TrendingUp,
  Crown,
  Target,
  Users,
  DollarSign
} from 'lucide-react';

const Leaderboard = () => {
  const [timeFilter, setTimeFilter] = useState('monthly');

  const leaderboardData = {
    monthly: [
      { rank: 1, name: "Sarah Chen", avatar: "/placeholder.svg", raised: 4250.00, referrals: 18, badge: "🔥", change: 0 },
      { rank: 2, name: "Mike Rodriguez", avatar: "/placeholder.svg", raised: 3890.50, referrals: 15, badge: "⭐", change: 1 },
      { rank: 3, name: "Emily Johnson", avatar: "/placeholder.svg", raised: 3650.75, referrals: 22, badge: "💎", change: -1 },
      { rank: 4, name: "Alex Thompson", avatar: "/placeholder.svg", raised: 3200.25, referrals: 14, badge: "🚀", change: 2 },
      { rank: 5, name: "You (John Doe)", avatar: "/placeholder.svg", raised: 2847.50, referrals: 12, badge: "⚡", change: -2, isCurrentUser: true },
      { rank: 6, name: "Lisa Wang", avatar: "/placeholder.svg", raised: 2650.00, referrals: 16, badge: "🎯", change: 0 },
      { rank: 7, name: "David Kim", avatar: "/placeholder.svg", raised: 2400.75, referrals: 11, badge: "🌟", change: 1 },
      { rank: 8, name: "Rachel Green", avatar: "/placeholder.svg", raised: 2250.50, referrals: 9, badge: "💪", change: -1 },
      { rank: 9, name: "Tom Wilson", avatar: "/placeholder.svg", raised: 2100.25, referrals: 13, badge: "🎨", change: 0 },
      { rank: 10, name: "Anna Davis", avatar: "/placeholder.svg", raised: 1950.00, referrals: 8, badge: "🔮", change: 1 }
    ]
  };

  const topPerformers = [
    { title: "Top Fundraiser", name: "Sarah Chen", value: "$4,250", icon: DollarSign },
    { title: "Most Referrals", name: "Emily Johnson", value: "22", icon: Users },
    { title: "Rising Star", name: "Alex Thompson", value: "+2 ranks", icon: TrendingUp },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getChangeIndicator = (change: number) => {
    if (change > 0) return <span className="text-success text-xs">↗ +{change}</span>;
    if (change < 0) return <span className="text-destructive text-xs">↘ {change}</span>;
    return <span className="text-muted-foreground text-xs">—</span>;
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Leaderboard 🏆</h1>
          <p className="text-muted-foreground mt-1">
            See how you stack up against other interns
          </p>
        </div>
        <Tabs value={timeFilter} onValueChange={setTimeFilter} className="mt-4 md:mt-0">
          <TabsList>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="alltime">All Time</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Top Performers Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topPerformers.map((performer, index) => {
          const IconComponent = performer.icon;
          return (
            <Card key={index} className="text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto p-2 rounded-full bg-primary/10 w-fit">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{performer.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{performer.value}</div>
                <div className="text-sm text-muted-foreground">{performer.name}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="h-5 w-5" />
            <span>Monthly Rankings</span>
          </CardTitle>
          <CardDescription>
            Rankings based on total donations raised this month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {leaderboardData.monthly.map((user) => (
              <div 
                key={user.rank} 
                className={`flex items-center space-x-4 p-4 rounded-lg transition-all ${
                  user.isCurrentUser 
                    ? 'bg-primary/10 border border-primary/20' 
                    : 'bg-muted/50 hover:bg-muted'
                }`}
              >
                <div className="flex items-center space-x-3 min-w-0 flex-1">
                  <div className="flex items-center justify-center w-8">
                    {getRankIcon(user.rank)}
                  </div>
                  
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center space-x-2">
                      <p className="font-medium truncate">
                        {user.name}
                        {user.isCurrentUser && (
                          <Badge variant="secondary" className="ml-2 text-xs">You</Badge>
                        )}
                      </p>
                      <span className="text-lg">{user.badge}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>${user.raised.toLocaleString()}</span>
                      <span>•</span>
                      <span>{user.referrals} referrals</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  {getChangeIndicator(user.change)}
                  <Button size="sm" variant="ghost">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Your Stats Summary */}
      <Card className="bg-gradient-to-r from-primary/10 to-purple-600/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Your Performance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">#5</div>
              <div className="text-sm text-muted-foreground">Current Rank</div>
            </div>
            <div>
              <div className="text-2xl font-bold">$2,847</div>
              <div className="text-sm text-muted-foreground">Raised This Month</div>
            </div>
            <div>
              <div className="text-2xl font-bold">$1,403</div>
              <div className="text-sm text-muted-foreground">Behind Leader</div>
            </div>
            <div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-muted-foreground">Referrals</div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center space-x-3">
            <Button>
              Share Achievement
            </Button>
            <Button variant="outline">
              View Full Stats
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;