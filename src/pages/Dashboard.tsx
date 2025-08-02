import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import StatCard from '@/components/StatCard';
import { 
  DollarSign, 
  Users, 
  Target, 
  TrendingUp,
  Copy,
  Gift,
  Award,
  Calendar
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const { toast } = useToast();
  const [internData, setInternData] = useState({
    name: 'John Doe',
    referralCode: 'johndoe2025',
    donationsRaised: 2847.50,
    referralsCount: 12,
    goalProgress: 68,
    rank: 5,
    achievements: 8
  });

  const [recentActivity] = useState([
    { type: 'donation', amount: 50, donor: 'Sarah M.', time: '2 hours ago' },
    { type: 'referral', name: 'Mike Johnson', time: '1 day ago' },
    { type: 'achievement', name: 'First $1000 Raised', time: '3 days ago' },
    { type: 'donation', amount: 100, donor: 'Anonymous', time: '1 week ago' }
  ]);

  const copyReferralCode = () => {
    navigator.clipboard.writeText(internData.referralCode);
    toast({
      title: "Copied!",
      description: "Referral code copied to clipboard",
    });
  };

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {internData.name}! 👋</h1>
          <p className="text-muted-foreground mt-1">
            Here's your impact dashboard for this month
          </p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Badge variant="secondary" className="text-sm">
            Rank #{internData.rank}
          </Badge>
          <Badge variant="outline" className="bg-gradient-to-r from-primary/10 to-purple-600/10">
            {internData.achievements} Achievements
          </Badge>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Donations Raised"
          value={`$${internData.donationsRaised.toLocaleString()}`}
          icon={DollarSign}
          description="This month"
          trend="up"
          trendValue="+12%"
          gradient={true}
        />
        <StatCard
          title="Referrals"
          value={internData.referralsCount}
          icon={Users}
          description="Active referrals"
          trend="up"
          trendValue="+3"
        />
        <StatCard
          title="Goal Progress"
          value={`${internData.goalProgress}%`}
          icon={Target}
          description="Monthly target"
          trend="up"
          trendValue="+8%"
        />
        <StatCard
          title="Rank"
          value={`#${internData.rank}`}
          icon={TrendingUp}
          description="Leaderboard position"
          trend="up"
          trendValue="+2"
        />
      </div>

      {/* Referral Code & Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Your Referral Code</span>
            </CardTitle>
            <CardDescription>
              Share this code to earn referral bonuses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
              <code className="font-mono text-lg font-semibold flex-1">
                {internData.referralCode}
              </code>
              <Button size="sm" variant="outline" onClick={copyReferralCode}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Earn $10 for every successful referral that raises $100+
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span>Monthly Goal</span>
            </CardTitle>
            <CardDescription>
              Track your progress towards $5,000 goal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>${internData.donationsRaised.toLocaleString()} / $5,000</span>
              </div>
              <Progress value={internData.goalProgress} className="h-2" />
              <p className="text-sm text-muted-foreground">
                ${(5000 - internData.donationsRaised).toLocaleString()} to go!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                  <div className={`p-2 rounded-full ${
                    activity.type === 'donation' ? 'bg-success/10 text-success' :
                    activity.type === 'referral' ? 'bg-primary/10 text-primary' :
                    'bg-warning/10 text-warning'
                  }`}>
                    {activity.type === 'donation' ? <DollarSign className="h-4 w-4" /> :
                     activity.type === 'referral' ? <Users className="h-4 w-4" /> :
                     <Award className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    {activity.type === 'donation' && (
                      <p className="text-sm">
                        <span className="font-medium">${activity.amount}</span> donation from{' '}
                        <span className="font-medium">{activity.donor}</span>
                      </p>
                    )}
                    {activity.type === 'referral' && (
                      <p className="text-sm">
                        New referral: <span className="font-medium">{activity.name}</span>
                      </p>
                    )}
                    {activity.type === 'achievement' && (
                      <p className="text-sm">
                        Achievement unlocked: <span className="font-medium">{activity.name}</span>
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Gift className="h-5 w-5" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full" variant="default">
              Share Referral Link
            </Button>
            <Button className="w-full" variant="outline">
              View Rewards
            </Button>
            <Button className="w-full" variant="outline">
              Check Leaderboard
            </Button>
            <Button className="w-full" variant="ghost">
              Download Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;