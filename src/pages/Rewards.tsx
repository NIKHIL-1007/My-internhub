import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  Star, 
  Gift, 
  Lock, 
  CheckCircle,
  Target,
  Medal,
  Zap
} from 'lucide-react';

const Rewards = () => {
  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Raise your first $100",
      icon: Star,
      unlocked: true,
      reward: "$5 Amazon Gift Card",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Rising Star",
      description: "Raise $1,000 in donations",
      icon: Trophy,
      unlocked: true,
      reward: "$25 Visa Gift Card",
      date: "2024-01-22"
    },
    {
      id: 3,
      title: "Networking Pro",
      description: "Get 10 successful referrals",
      icon: Target,
      unlocked: true,
      reward: "Exclusive InternHub Hoodie",
      date: "2024-01-28"
    },
    {
      id: 4,
      title: "Fundraising Champion",
      description: "Raise $5,000 in donations",
      icon: Medal,
      unlocked: false,
      progress: 68,
      reward: "$100 Apple Store Gift Card",
      requirement: "$5,000"
    },
    {
      id: 5,
      title: "Super Connector",
      description: "Get 25 successful referrals",
      icon: Zap,
      unlocked: false,
      progress: 48,
      reward: "iPad Mini",
      requirement: "25 referrals"
    },
    {
      id: 6,
      title: "Elite Fundraiser",
      description: "Raise $10,000 in donations",
      icon: Trophy,
      unlocked: false,
      progress: 28,
      reward: "MacBook Air",
      requirement: "$10,000"
    }
  ];

  const milestoneRewards = [
    { amount: "$500", reward: "Coffee Shop Gift Card", unlocked: true },
    { amount: "$1,000", reward: "Wireless Earbuds", unlocked: true },
    { amount: "$2,500", reward: "Smartwatch", unlocked: true },
    { amount: "$5,000", reward: "Laptop Upgrade", unlocked: false, progress: 68 },
    { amount: "$10,000", reward: "MacBook Pro", unlocked: false, progress: 28 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Rewards & Achievements 🏆</h1>
        <p className="text-muted-foreground mt-1">
          Track your progress and claim amazing rewards
        </p>
      </div>

      {/* Progress Overview */}
      <Card className="bg-gradient-to-r from-primary/10 to-purple-600/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Gift className="h-5 w-5" />
            <span>Current Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground">Achievements Unlocked</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">$2,847</div>
              <div className="text-sm text-muted-foreground">Total Raised</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">3</div>
              <div className="text-sm text-muted-foreground">Rewards Pending</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements Grid */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={achievement.id} className={`transition-all duration-300 hover:shadow-lg ${
                achievement.unlocked ? 'border-success/50 bg-success/5' : 'border-muted'
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-full ${
                      achievement.unlocked 
                        ? 'bg-success text-success-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    {achievement.unlocked ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <Lock className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {achievement.unlocked ? (
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {achievement.reward}
                      </Badge>
                      <p className="text-xs text-muted-foreground">
                        Unlocked on {achievement.date}
                      </p>
                      <Button size="sm" className="w-full mt-3">
                        Claim Reward
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <Progress value={achievement.progress} className="h-2" />
                      </div>
                      <Badge variant="outline" className="mb-2">
                        {achievement.reward}
                      </Badge>
                      <p className="text-xs text-muted-foreground">
                        Requirement: {achievement.requirement}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Milestone Rewards */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Milestone Rewards</h2>
        <Card>
          <CardHeader>
            <CardTitle>Fundraising Milestones</CardTitle>
            <CardDescription>
              Unlock exclusive rewards as you reach fundraising goals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {milestoneRewards.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
                  <div className={`p-2 rounded-full ${
                    milestone.unlocked 
                      ? 'bg-success text-success-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {milestone.unlocked ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <Lock className="h-5 w-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{milestone.amount} Milestone</span>
                      <Badge variant={milestone.unlocked ? "default" : "outline"}>
                        {milestone.reward}
                      </Badge>
                    </div>
                    {!milestone.unlocked && milestone.progress && (
                      <div className="space-y-1">
                        <Progress value={milestone.progress} className="h-1" />
                        <p className="text-xs text-muted-foreground">
                          {milestone.progress}% complete
                        </p>
                      </div>
                    )}
                  </div>
                  {milestone.unlocked && (
                    <Button size="sm">
                      Claim
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Rewards;